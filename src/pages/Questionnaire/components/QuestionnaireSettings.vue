<template>
	<div class="q-gutter-md">
		<q-input label="Nome do questionário" class="input bg-white" outlined />

		<q-input
			label="Nota máxima da avaliação"
			class="input bg-white"
			outlined
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class QuestionnaireSettings extends Vue {}
</script>
<style lang="scss" scoped></style>
