<template>
	<q-card flat bordered class="box-sm">
		<q-card-section>
			<div class="text-h6">Compartilhe o link</div>
		</q-card-section>

		<q-card-section class="q-pt-none">
			<q-input
				readonly
				outlined
				class="bg-grey-1"
				value="http://localhost/teste/64"
			>
				<template v-slot:append>
					<q-btn round dense flat icon="content_copy">
						<q-tooltip>Copiar</q-tooltip>
					</q-btn>
					<q-btn round dense flat icon="open_in_new">
						<q-tooltip>Abrir em uma aba</q-tooltip>
					</q-btn>
				</template>
			</q-input>
		</q-card-section>

		<q-separator inset />

		<q-card-section class="text-grey-8">
			Envie o link da avaliação para seus alunos.
		</q-card-section>
	</q-card>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class CardEmailVehicle extends Vue {}
</script>
<style lang="scss" scoped></style>
