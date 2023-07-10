import { Mutation, Module, VuexModule, Action } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';
import { iQuestion } from 'src/interfaces/iQuestion';
import { api } from 'src/boot/axios';
import {
	QuestionProtocol,
	findQuestionByType,
} from 'src/components/questions/registry';

import sha256 from 'sha256';

export interface iResponse {
	questionId: string;
	type: string;
	response: any;
}

export interface MountQuestionDto {
	settings: iQuestion;
	builder: QuestionProtocol;
	response: any;
}

@Module({ namespaced: true })
export class EvaluationQuestionnaire extends VuexModule {
	current = 0;

	@Mutation
	SET_CURRENT(val: number) {
		this.current = val;
	}

	questions: iQuestion[] = [];

	@Mutation
	SET_QUESTIONS(payload: iQuestion[]) {
		if (!payload) return;
		this.questions = payload;
	}

	responses: iResponse[] = [];
	placeholder: iResponse[] = [];

	@Mutation
	APPEND_RESPONSE(payload: iResponse | null) {
		if (!payload) return;

		this.responses.push(payload);

		this.placeholder = this.placeholder.filter(
			({ questionId }) => questionId !== payload.questionId
		);
		this.placeholder.push(payload);
	}

	@Mutation
	POP_RESPONSE() {
		this.responses.pop();
	}

	get xProgress() {
		const qntQuests = this.questions.length;
		const responded = this.responses.length;

		return `${responded + 1}/${qntQuests}`;
	}

	get vProgress() {
		const qntQuests = this.questions.length;
		const responded = this.responses.length;

		return responded / qntQuests;
	}

	get question() {
		if (!this.questions.length) return null;

		const settings = this.questions[this.current];

		const builder = findQuestionByType(settings.type);

		const responded = this.responses.find(
			(resp) => resp.questionId === settings.id
		);
		const placeholder = this.placeholder.find(
			(place) => place.questionId === settings.id
		);

		return {
			settings,
			builder,
			response: responded
				? responded.response
				: placeholder
				? placeholder.response
				: builder
				? builder.responseFactory()
				: '',
		};
	}

	get isLastQuestion() {
		return this.current + 1 === this.questions.length;
	}

	get isFirstQuestion() {
		return this.current === 0;
	}

	@Action({ commit: 'SET_CURRENT' })
	next(response: unknown) {
		if (!this.question) return this.current;
		const { id, type } = this.question.settings;
		const responseData: iResponse = { questionId: id, type, response };
		this.context.commit('APPEND_RESPONSE', responseData);

		if (this.isLastQuestion) return this.current;
		return this.current + 1;
	}

	@Action({ commit: 'SET_CURRENT' })
	prev() {
		if (this.isFirstQuestion) return this.current;
		this.context.commit('POP_RESPONSE');
		return this.current - 1;
	}

	@Action({ commit: 'SET_QUESTIONS' })
	async getQuestions(evaluationId: string) {
		try {
			const url = `/v1/presentation/questions/${evaluationId}`;
			const { data } = await api.get<iQuestion[]>(url);
			return data;
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}

	@Action
	async finishEvaluation(evaluationId: string) {
		try {
			const url = `/v1/presentation/finish/${evaluationId}`;

			const salt = Math.round(Math.random() * 1e5);
			const timestamp = new Date().getTime();
			const responses = this.responses;

			const result = {
				timestamp,
				responses,
				hash: sha256(
					`${timestamp}:${salt}:${JSON.stringify(responses)}`
				),
			};

			const { data } = await api.post(url, result);
			console.log('🗿🍷 ~ data:', JSON.stringify(data));

			this.context.commit('EvaluationGeneral/SET_RESULT', data, {
				root: true,
			});

			this.context.commit('EvaluationPresentation/next', null, {
				root: true,
			});
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}
}

export const EvaluationQuestionnaireStore = namespace(
	EvaluationQuestionnaire.name
);
