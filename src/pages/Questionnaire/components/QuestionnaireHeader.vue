<template>
	<div class="questionnaire-header">
		<q-card flat bordered class="full-width bg-white q-ma-none">
			<q-card-section>
				<div class="row items-center no-wrap">
					<div class="col">
						<div class="text-h6">Português</div>
						<div class="text-subtitle2">by John Doe</div>
					</div>
				</div>
			</q-card-section>

			<q-card-section>
				<q-list class="q-pa-none">
					<q-item class="q-px-none">
						<q-item-section>
							<q-item-label overline>
								Publicado em:
							</q-item-label>
							<q-item-label>
								{{ new Date().toLocaleDateString() }}
							</q-item-label>
						</q-item-section>
						<q-item-section>
							<q-item-label overline>
								Tempo estimado:
							</q-item-label>
							<q-item-label> 15mim </q-item-label>
						</q-item-section>
					</q-item>
					<q-item class="q-px-none">
						<q-item-section>
							<q-item-label overline>
								Qnt questões:
							</q-item-label>
							<q-item-label> 15 </q-item-label>
						</q-item-section>
						<q-item-section>
							<q-item-label overline> Melhor nota: </q-item-label>
							<q-item-label> 100 </q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</q-card-section>

			<q-separator />

			<q-card-actions class="q-pa-md bg-grey-1">
				<q-btn outline color="positive">Salvar</q-btn>
				<q-btn unelevated color="positive">Publicar</q-btn>
			</q-card-actions>
		</q-card>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({})
	export default class QuestionnaireHeader extends Vue {}
</script>
<style lang="scss" scoped></style>
