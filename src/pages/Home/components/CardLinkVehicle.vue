<template>
	<q-card flat bordered class="box-sm">
		<q-card-section>
			<div class="text-h6">Compartilhe o link</div>
		</q-card-section>

		<q-card-section class="q-pt-none">
			<q-input readonly outlined class="bg-grey-1" :value="evaluationUrl">
				<template v-slot:append>
					<q-icon v-if="copied" name="check" color="positive" />
					<q-btn
						v-else
						@click="handleCopy"
						round
						dense
						flat
						icon="content_copy"
					>
						<q-tooltip>Copiar</q-tooltip>
					</q-btn>

					<q-btn
						@click="handleOpenInNewTab"
						round
						dense
						flat
						icon="open_in_new"
					>
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

	import { copyToClipboard } from 'quasar';
	import { Delay } from 'src/utils/Delay';

	import { PersistDataStore } from 'src/store/Modules/PersistData';

	@Component
	export default class CardEmailVehicle extends Vue {
		copied = false;

		@PersistDataStore.State
		choosenQuestionnaire!: string;

		get evaluationUrl() {
			const baseUrl = window.location.origin;
			return `${baseUrl}/#/panel/evaluation/${this.choosenQuestionnaire}`;
		}

		async handleCopy() {
			await copyToClipboard(this.evaluationUrl);
			this.copied = true;
			await Delay(1000);
			this.copied = false;
		}

		handleOpenInNewTab() {
			window.open(this.evaluationUrl, '_blank');
		}

		mounted() {
			console.log();
		}
	}
</script>
<style lang="scss" scoped></style>
