<template>
	<div class="questionnaire-page q-py-xl">
		<div class="row">
			<div class="col-8">
				<div class="q-gutter-md">
					<q-input
						label="Nome do questionário"
						class="input bg-white"
						outlined
					/>
					<q-input
						label="Nota máxima da avaliação"
						class="input bg-white"
						outlined
					/>
				</div>

				<h4 class="q-ma-none q-pt-xl q-pb-sm text-grey-7">
					Questões
					<small class="text-grey-5">[5]</small>
				</h4>

				<q-timeline>
					<q-timeline-entry subtitle="Questão 1">
						<div class="actions">
							<q-btn flat round color="negative" icon="delete" />
						</div>

						<span class="text-grey-7">Enunciado</span>
						<q-editor
							min-height="5rem"
							:toolbar="[['bold', 'italic', 'underline']]"
						/>

						<div class="q-pt-md">
							<span class="text-grey-7">Respostas</span>
							<q-list separator bordered class="bg-white">
								<q-item dense>
									<q-item-section avatar side>
										<q-avatar
											color="primary"
											rounded
											text-color="white"
											size="sm"
										>
											A
										</q-avatar>
									</q-item-section>
									<q-item-section>
										<q-input
											dense
											borderless
											placeholder="Opção 1"
										/>
									</q-item-section>

									<q-item-section side top>
										<q-radio :value="false" />
									</q-item-section>
								</q-item>
								<q-item dense>
									<q-item-section avatar side>
										<q-avatar
											color="primary"
											rounded
											text-color="white"
											size="sm"
										>
											A
										</q-avatar>
									</q-item-section>
									<q-item-section>
										<q-input
											dense
											borderless
											placeholder="Opção 1"
										/>
									</q-item-section>
									<q-item-section side top>
										<q-radio :value="false" />
									</q-item-section>
								</q-item>
							</q-list>
						</div>
					</q-timeline-entry>
					<q-timeline-entry subtitle="Questão 1">
						<div class="actions">
							<q-btn flat round color="negative" icon="delete" />
						</div>
						<span class="text-grey-7">Enunciado</span>
						<q-editor
							min-height="5rem"
							:toolbar="[['bold', 'italic', 'underline']]"
						/>

						<div class="q-pt-md">
							<span class="text-grey-7">Respostas</span>
							<q-list separator bordered class="bg-white">
								<q-item dense>
									<q-item-section avatar side>
										<q-avatar
											color="primary"
											rounded
											text-color="white"
											size="sm"
										>
											A
										</q-avatar>
									</q-item-section>
									<q-item-section>
										<q-input
											dense
											borderless
											placeholder="Opção 1"
										/>
									</q-item-section>

									<q-item-section side top>
										<q-radio :value="false" />
									</q-item-section>
								</q-item>
								<q-item dense>
									<q-item-section avatar side>
										<q-avatar
											color="primary"
											rounded
											text-color="white"
											size="sm"
										>
											A
										</q-avatar>
									</q-item-section>
									<q-item-section>
										<q-input
											dense
											borderless
											placeholder="Opção 1"
										/>
									</q-item-section>
									<q-item-section side top>
										<q-radio :value="false" />
									</q-item-section>
								</q-item>
							</q-list>
						</div>
					</q-timeline-entry>
				</q-timeline>

				<q-btn
					label="Nova Questão"
					outline
					class="full-width"
					size="xl"
					color="primary"
				/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class QuestionnairePage extends Vue {}
</script>
<style lang="scss" scoped>
	.actions {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
