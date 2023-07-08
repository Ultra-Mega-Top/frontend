<template>
	<div class="questionnaire-page q-py-xl">
		<div class="row">
			<div class="col-8">
				<QuestionnaireSettings />

				<QuestionnaireQuestions />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import QuestionnaireSettings from './components/QuestionnaireSettings.vue';
	import QuestionnaireQuestions from './components/QuestionnaireQuestions/index.vue';

	@Component({
		components: { QuestionnaireSettings, QuestionnaireQuestions },
	})
	export default class QuestionnairePage extends Vue {}
</script>
<style lang="scss" scoped></style>
