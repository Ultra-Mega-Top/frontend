<template>
	<div class="questionnaire-page q-py-xl">
		<div class="row q-col-gutter-lg">
			<div class="col-8">
				<QuestionnaireSettings v-model="form" />

				<QuestionnaireQuestions v-model="form" />
			</div>

			<div class="col">
				<div class="widget-area">
					<QuestionnaireHeader v-model="form" />

					<DeleteQuestionnaire v-model="form" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import QuestionnaireSettings from './components/QuestionnaireSettings.vue';
	import QuestionnaireQuestions from './components/QuestionnaireQuestions/index.vue';
	import QuestionnaireHeader from './components/QuestionnaireHeader.vue';
	import DeleteQuestionnaire from './components/DeleteQuestionnaire.vue';

	import { QuestionnaireFactory } from './utils/QuestionnaireFactory';

	@Component({
		components: {
			QuestionnaireSettings,
			QuestionnaireQuestions,
			QuestionnaireHeader,
			DeleteQuestionnaire,
		},
	})
	export default class QuestionnairePage extends Vue {
		form = QuestionnaireFactory();
	}
</script>
<style lang="scss" scoped>
	.widget-area {
		position: sticky;
		top: 2em;
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		justify-content: flex-start;
		gap: 1em;
	}
</style>
