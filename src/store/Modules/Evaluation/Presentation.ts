import { Mutation, Module, VuexModule } from 'vuex-module-decorators';
import { namespace } from 'vuex-class';

@Module({ namespaced: true })
export class EvaluationPresentation extends VuexModule {
	current = 1;

	flow = ['IdentifyFlow', 'QuestionnaireFlow', 'ConclusionFlow'];

	get currentFlow() {
		return this.flow[this.current];
	}

	@Mutation
	next() {
		const isValid = this.current + 1 < this.flow.length;

		if (!isValid) return;
		this.current++;
	}

	@Mutation
	prev() {
		const isValid = this.current - 1 >= 0;

		if (!isValid) return;
		this.current--;
	}

	@Mutation
	go(step: number) {
		const isValid = step >= 0 && step < this.flow.length;

		if (!isValid) return;
		this.current = step;
	}
}

export const EvaluationPresentationStore = namespace(
	EvaluationPresentation.name
);
