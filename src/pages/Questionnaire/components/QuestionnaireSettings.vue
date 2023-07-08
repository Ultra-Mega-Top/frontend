<template>
	<div class="q-gutter-md">
		<q-input
			v-model="form.title"
			label="Nome do questionário"
			class="input bg-white"
			outlined
		/>

		<q-input
			label="Nota máxima da avaliação"
			class="input bg-white"
			outlined
			v-model="form.maxEvaluation"
			type="number"
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Model, Vue } from 'vue-property-decorator';

	import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';

	@Component
	export default class QuestionnaireSettings extends Vue {
		@Model()
		form!: iQuestionnaire;
	}
</script>
<style lang="scss" scoped></style>
