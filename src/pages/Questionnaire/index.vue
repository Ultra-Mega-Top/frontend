<template>
	<div class="questionnaire-page q-py-xl">
		<div class="row">
			<div class="col-8">
				<QuestionnaireSettings v-model="form" />

				<QuestionnaireQuestions v-model="form" />
			</div>
			<div class="col">
				<pre>{{ form }}</pre>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import QuestionnaireSettings from './components/QuestionnaireSettings.vue';
	import QuestionnaireQuestions from './components/QuestionnaireQuestions/index.vue';

	import { QuestionnaireFactory } from './utils/QuestionnaireFactory';

	@Component({
		components: { QuestionnaireSettings, QuestionnaireQuestions },
	})
	export default class QuestionnairePage extends Vue {
		form = QuestionnaireFactory();
	}
</script>
<style lang="scss" scoped></style>
