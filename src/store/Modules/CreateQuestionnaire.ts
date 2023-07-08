import { Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

@Module({ namespaced: true })
export class CreateQuestionnaire extends VuexModule {
	data = 'teste';
}

export const CreateQuestionnaireStore = namespace(CreateQuestionnaire.name);
