import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

import { api } from 'src/boot/axios';

export interface ShortQuestionnaire {
	_id: string;
	title: string;
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
}

export const HomeStore = namespace(Home.name);
