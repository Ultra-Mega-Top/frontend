import { Mutation, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

@Module({ namespaced: true })
export class PersistData extends VuexModule {
	choosenQuestionnaire = '';

	@Mutation
	SET_QUESTIONNAIRE(payload: string) {
		this.choosenQuestionnaire = payload;
	}
}

export const PersistDataStore = namespace(PersistData.name);
