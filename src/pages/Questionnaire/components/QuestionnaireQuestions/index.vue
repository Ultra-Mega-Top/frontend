<template>
	<div class="questionnaire-questions">
		<h4 class="q-ma-none q-pt-xl q-pb-sm text-grey-7">
			Questões
			<small class="text-grey-5">[5]</small>
		</h4>

		<q-timeline>
			<QQ_Item />
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
	import { Component, Vue } from 'vue-property-decorator';

	import QQ_Item from './components/qq-item.vue';

	@Component({ components: { QQ_Item } })
	export default class QuestionnaireQuestions extends Vue {}
</script>
<style lang="scss" scoped></style>
