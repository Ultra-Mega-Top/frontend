<template>
	<EvaluationWidget v-if="settings && question" :title="settings.title">
		<component
			v-if="component && questionId"
			:key="questionId"
			:is="component"
			:settings="question.settings"
			v-model="response"
		/>

		<QuestionAction slot="footer" :response="response" />
	</EvaluationWidget>
</template>
<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator';

	import {
		EvaluationGeneralStore,
		QuestionnaireSettings,
	} from 'src/store/Modules/Evaluation/General';

	import {
		EvaluationQuestionnaireStore,
		MountQuestionDto,
	} from 'src/store/Modules/Evaluation/Questionnaire';

	import EvaluationWidget from '../../components/EvaluationWidget.vue';
	import QuestionAction from './components/actions.vue';

	@Component({ components: { EvaluationWidget, QuestionAction } })
	export default class QuestionnaireFlow extends Vue {
		response = '';
		component: any = null;

		@EvaluationGeneralStore.State
		evaluationId!: string;

		@EvaluationGeneralStore.State
		settings!: QuestionnaireSettings | null;

		@EvaluationQuestionnaireStore.Action
		getQuestions!: (evaluationId: string) => Promise<void>;

		@EvaluationQuestionnaireStore.Getter
		question!: MountQuestionDto | null;

		get questionId() {
			if (!this.question) return '';
			return this.question.settings.id;
		}

		@Watch('questionId')
		handleObserverQuestionId(val: string) {
			if (!val) return;

			this.component = this.question?.builder.runtime();
		}

		async mounted() {
			await this.getQuestions(this.evaluationId);
		}
	}
</script>
<style lang="scss" scoped></style>
