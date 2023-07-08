<template>
	<div class="evaluation-page q-py-xl">
		<div class="questionnaire shadow-16">
			<header class="bg-primary text-white q-px-lg q-py-md">
				<h6 class="q-ma-none">
					<b class="q-mr-md">Materia:</b> <small>Portugues</small>

					<small class="float-right text-blue-2">5/10</small>
				</h6>
			</header>
			<q-linear-progress :value="0.5" color="blue-5" />
			<main class="q-pa-lg">
				<p class="enunciated">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Autem ea laborum ipsam eligendi saepe itaque deserunt, ad
					ipsa. Facere a natus aspernatur laboriosam distinctio quidem
					assumenda autem dolorem ducimus nihil.
				</p>

				<q-list class="q-gutter-xs q-mt-lg">
					<q-item dense tag="label" v-ripple class="bg-grey-4">
						<q-item-section side top>
							<q-radio :value="true" />
						</q-item-section>

						<q-item-section>
							<q-item-label>
								Notify me about updates to apps or games that I
								downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item dense tag="label" v-ripple class="bg-grey-4">
						<q-item-section side top>
							<q-radio :value="true" />
						</q-item-section>

						<q-item-section>
							<q-item-label>
								Notify me about updates to apps or games that I
								downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item dense tag="label" v-ripple class="bg-grey-4">
						<q-item-section side top>
							<q-radio :value="true" />
						</q-item-section>

						<q-item-section>
							<q-item-label>
								Notify me about updates to apps or games that I
								downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item dense tag="label" v-ripple class="bg-grey-4">
						<q-item-section side top>
							<q-radio :value="true" />
						</q-item-section>

						<q-item-section>
							<q-item-label>
								Notify me about updates to apps or games that I
								downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item dense tag="label" v-ripple class="bg-grey-4">
						<q-item-section side top>
							<q-radio :value="true" />
						</q-item-section>

						<q-item-section>
							<q-item-label>
								Notify me about updates to apps or games that I
								downloaded
							</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</main>
			<q-separator />
			<footer class="q-px-lg q-py-md q-gutter-sm">
				<q-btn
					label="Voltar"
					color="primary"
					size="lg"
					padding="sm lg"
					flat
				/>
				<q-btn
					label="Próximo"
					color="primary"
					size="lg"
					padding="sm lg"
					unelevated
				/>
			</footer>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class EvaluationPage extends Vue {}
</script>
<style lang="scss" scoped>
	.evaluation-page {
		display: flex;
		align-items: safe center;
		justify-content: center;
		width: 100%;
		min-height: calc(100% - 58px);

		.questionnaire {
			width: 100%;
			max-width: 800px;
			border-radius: 8px;
			border: 1px solid $grey-5;
			overflow: hidden;

			.enunciated {
				font-size: 17px;
				letter-spacing: 1px;
				font-weight: 300;
			}

			footer {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>
