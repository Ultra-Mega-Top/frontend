import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

import { api } from 'src/boot/axios';
import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';
import { StartEvaluationDto } from './Dtos/StartEvaluationDto';
import { iResult } from 'src/interfaces/iResult';

export type QuestionnaireSettings = Omit<iQuestionnaire, 'questions'>;

@Module({ namespaced: true })
export class EvaluationGeneral extends VuexModule {
	evaluationId = '';
	settings: QuestionnaireSettings | null = null;

	@Mutation
	SET_QUESTIONNAIRE_SETTINGS(payload: QuestionnaireSettings) {
		if (!payload) return;
		this.settings = payload;
	}

	@Action({ commit: 'SET_QUESTIONNAIRE_SETTINGS' })
	async loadQuestionnaire(questionnaireId: string) {
		try {
			const url = `/v1/presentation/settings/${questionnaireId}`;
			const { data } = await api.get<QuestionnaireSettings>(url);
			return data;
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}

	@Mutation
	SET_EVALUATION_ID(payload: string) {
		if (!payload) return;
		this.evaluationId = payload;
	}

	@Action({ commit: 'SET_EVALUATION_ID' })
	async tryStartEvaluation(payload: StartEvaluationDto) {
		try {
			const url = '/v1/presentation/try-start';
			const { data } = await api.post<string>(url, payload);
			return data;
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}

	result: iResult | null = null;

	@Mutation
	SET_RESULT(payload: iResult) {
		this.result = payload;
	}
}

export const EvaluationGeneralStore = namespace(EvaluationGeneral.name);
