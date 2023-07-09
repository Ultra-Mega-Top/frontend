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
				<q-btn
					:loading="loading.save"
					:disable="loading.save"
					outline
					color="positive"
					@click="handleSave"
				>
					Salvar
				</q-btn>

				<q-btn
					:loading="loading.publish"
					:disable="loading.publish"
					unelevated
					color="positive"
				>
					Publicar
				</q-btn>
			</q-card-actions>
		</q-card>
	</div>
</template>
<script lang="ts">
	import { Component, Model, Vue } from 'vue-property-decorator';

	import { CreateQuestionnaireStore } from 'src/store/Modules/CreateQuestionnaire';
	import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';
	import { cloneDeep } from 'lodash';

	@Component({})
	export default class QuestionnaireHeader extends Vue {
		loading = {
			save: false,
			publish: false,
		};

		@Model()
		form!: iQuestionnaire;

		@CreateQuestionnaireStore.Action
		createQuestionnaire!: (questionnaire: iQuestionnaire) => Promise<void>;

		async handleSave() {
			try {
				this.loading.save = true;
				const dto = cloneDeep(this.form);
				await this.createQuestionnaire(dto);
			} catch (error) {
				console.log('🗿🍷 ~ error:', error);
			}
			this.loading.save = false;
		}
	}
</script>
<style lang="scss" scoped></style>
