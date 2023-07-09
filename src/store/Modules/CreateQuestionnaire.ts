import { Action, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';
import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';

import { api } from 'src/boot/axios';

@Module({ namespaced: true })
export class CreateQuestionnaire extends VuexModule {
	data = 'teste';

	@Action
	async createQuestionnaire(questionnaire: iQuestionnaire) {
		try {
			await api.post('/v1/questionnaire', questionnaire);
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	}
}

export const CreateQuestionnaireStore = namespace(CreateQuestionnaire.name);
