<template>
	<EvaluationWidget v-if="settings" :title="settings.title">
		<div class="q-gutter-lg">
			<q-input
				v-model="form.name"
				label="Nome Completo"
				outlined
				class="bg-white"
			/>
			<q-input
				v-model="form.registry"
				label="Maticula"
				outlined
				class="bg-white"
			/>

			<Instructions
				:terms.sync="form.terms"
				:evaluation="settings.maxEvaluation"
			/>
		</div>
		<template slot="footer">
			<span></span>
			<q-btn
				label="Iniciar avaliação"
				color="primary"
				size="lg"
				padding="sm lg"
				unelevated
				:loading="loading"
				:disable="!form.terms || loading"
				@click="handleStartEvaluation"
			/>
		</template>
	</EvaluationWidget>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import {
		EvaluationGeneralStore,
		QuestionnaireSettings,
	} from 'src/store/Modules/Evaluation/General';

	import Instructions from './components/Instructions.vue';
	import EvaluationWidget from '../../components/EvaluationWidget.vue';
	import { StartEvaluationDto } from 'src/store/Modules/Evaluation/Dtos/StartEvaluationDto';
	import { EvaluationPresentationStore } from 'src/store/Modules/Evaluation/Presentation';

	@Component({ components: { EvaluationWidget, Instructions } })
	export default class IdentifyFlow extends Vue {
		loading = false;
		form = { name: '', registry: '', terms: false };

		@EvaluationGeneralStore.State
		settings!: QuestionnaireSettings | null;

		@EvaluationGeneralStore.Action
		tryStartEvaluation!: (payload: StartEvaluationDto) => Promise<void>;

		@EvaluationPresentationStore.Mutation
		next!: () => void;

		async handleStartEvaluation() {
			this.loading = true;

			const { questionnaireId } = this.$route.params;
			const { name, registry } = this.form;

			await this.tryStartEvaluation({
				questionnaireId,
				name,
				registry: +registry,
			});

			this.next();

			this.loading = false;
		}
	}
</script>
<style lang="scss" scoped></style>
