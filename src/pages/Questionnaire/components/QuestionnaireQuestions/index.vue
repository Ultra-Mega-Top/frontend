<template>
	<div class="questionnaire-questions">
		<h4 class="q-ma-none q-pt-xl q-pb-sm text-grey-7">
			Questões
			<small class="text-grey-5">[{{ form.questions.length }}]</small>
		</h4>

		<q-timeline>
			<QQ_Item
				v-for="(question, index) in form.questions"
				:key="question.id"
				:number="index"
				:question="question"
			/>
		</q-timeline>

		<q-btn
			label="Nova Questão"
			outline
			class="full-width"
			size="xl"
			color="primary"
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Model, Vue } from 'vue-property-decorator';

	import QQ_Item from './components/qq-item.vue';
	import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';

	@Component({ components: { QQ_Item } })
	export default class QuestionnaireQuestions extends Vue {
		@Model()
		form!: iQuestionnaire;
	}
</script>
<style lang="scss" scoped></style>
