<template>
	<q-card flat bordered class="box-sm">
		<q-card-section>
			<div class="text-h6">Envie para o email</div>
		</q-card-section>

		<q-card-section class="q-pt-none">
			<q-btn
				label="Escolher seu arquivo (.csv)"
				outline
				padding="md"
				class="full-width"
				disable
				icon="lock"
			/>
		</q-card-section>

		<q-separator inset />

		<q-card-section class="text-grey-7">
			Envie a avaliação para o email dos seus alunos.
		</q-card-section>
	</q-card>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class CardLinkVehicle extends Vue {}
</script>
<style lang="scss" scoped></style>
