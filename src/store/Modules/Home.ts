import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

import { api } from 'src/boot/axios';

export interface ShortQuestionnaire {
	_id: string;
	title: string;
}

export interface ShortEvaluation {
	_id: string;
	name: string;
	duration: number;
	evaluation: number;
	maxEvaluation: number;
	studentId: number;
	correctAnswers: [number, string][];
	wrongAnswers: [number, string][];
	date: Date;
}

@Module({ namespaced: true })
export class Home extends VuexModule {
	questionnaires: ShortQuestionnaire[] = [];

	@Mutation
	SET_QUESTIONNAIRES(payload: ShortQuestionnaire[]) {
		this.questionnaires = payload;
	}

	@Action({ commit: 'SET_QUESTIONNAIRES' })
	async loadQuestionnaires() {
		try {
			const url = '/v1/questionnaire';
			const { data } = await api.get<ShortQuestionnaire[]>(url);
			return data;
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}

	evaluations: ShortEvaluation[] = [];

	get totalEvaluations() {
		return this.evaluations.reduce((acc, evaluation) => {
			if (evaluation.evaluation) acc++;
			return acc;
		}, 0);
	}

	@Mutation
	SET_EVALUATIONS(payload: ShortEvaluation[]) {
		this.evaluations = payload;
	}

	@Action({ commit: 'SET_EVALUATIONS' })
	async loadEvaluations(questionnaireId: string) {
		try {
			const url = `/v1/evaluation/all/${questionnaireId}`;
			const { data } = await api.get<ShortEvaluation[]>(url);
			return data;
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}
}

export const HomeStore = namespace(Home.name);
