<template>
	<div class="evaluation-page">
		<component :is="currentFlow" />
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import IdentifyFlow from './flow/identify/index.vue';
	import QuestionnaireFlow from './flow/questionnaire/index.vue';
	import ConclusionFlow from './flow/conclusion/index.vue';
	import { EvaluationPresentationStore } from 'src/store/Modules/Evaluation/Presentation';
	import { EvaluationGeneralStore } from 'src/store/Modules/Evaluation/General';

	@Component({
		components: { IdentifyFlow, QuestionnaireFlow, ConclusionFlow },
	})
	export default class EvaluationPage extends Vue {
		@EvaluationPresentationStore.Getter
		currentFlow!: string;

		@EvaluationGeneralStore.Action
		loadQuestionnaire!: (questionnaireId: string) => Promise<void>;

		async mounted() {
			const { questionnaireId } = this.$route.params;
			await this.loadQuestionnaire(questionnaireId);
		}
	}
</script>
<style lang="scss" scoped>
	.evaluation-page {
		display: flex;
		align-items: safe center;
		justify-content: center;
		width: 100%;
		min-height: calc(100% - 58px);
		padding: 4em 0 8em;
	}
</style>
