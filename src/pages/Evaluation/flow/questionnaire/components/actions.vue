<template>
	<div class="cnt-actions">
		<q-btn
			v-if="!isFirstQuestion"
			label="Voltar"
			color="primary"
			size="lg"
			padding="sm lg"
			flat
			@click="handlePrevQuestion"
		/>

		<q-btn
			v-if="!isLastQuestion"
			label="Próximo"
			color="primary"
			size="lg"
			padding="sm lg"
			class="float-right"
			unelevated
			@click="handleNextQuestion"
		/>
		<q-btn
			v-else
			label="Finalizar e enviar"
			color="positive"
			size="lg"
			padding="sm lg"
			class="float-right"
			unelevated
			:disable="loading"
			:loading="loading"
			@click="handleFinish"
		/>

		<div class="clear-both"></div>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	import { EvaluationQuestionnaireStore } from 'src/store/Modules/Evaluation/Questionnaire';
	import { EvaluationGeneralStore } from 'src/store/Modules/Evaluation/General';

	@Component
	export default class QuestionAction extends Vue {
		loading = false;

		@Prop()
		response!: any;

		@EvaluationGeneralStore.State
		evaluationId!: string;

		@EvaluationQuestionnaireStore.Getter
		isFirstQuestion!: boolean;

		@EvaluationQuestionnaireStore.Getter
		isLastQuestion!: boolean;

		@EvaluationQuestionnaireStore.Action
		next!: (response: unknown) => void;

		@EvaluationQuestionnaireStore.Action
		prev!: () => void;

		@EvaluationQuestionnaireStore.Action
		finishEvaluation!: (evaluationId: string) => Promise<void>;

		handleNextQuestion() {
			this.next(this.response);
		}

		handlePrevQuestion() {
			this.prev();
		}

		async handleFinish() {
			this.loading = true;
			await this.finishEvaluation(this.evaluationId);
			this.loading = false;
		}
	}
</script>
<style lang="scss" scoped>
	.cnt-actions {
		width: 100%;
	}
</style>
