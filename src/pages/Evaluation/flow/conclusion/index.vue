<template>
	<EvaluationWidget v-if="settings" :title="settings.title">
		<div class="cnt-result">
			<q-circular-progress
				show-value
				font-size="12px"
				:value="progress"
				size="150px"
				:thickness="0.22"
				:color="color"
				track-color="grey-3"
				class="q-ma-md"
			>
				<div class="text-h4" :class="`text-${color}`">
					{{ result.points }}/<span class="text-grey-6 text-h5">{{
						result.maxPoints
					}}</span>
				</div>
			</q-circular-progress>

			<div class="text-h4 text-grey-7">Seu resultado</div>
		</div>
	</EvaluationWidget>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import {
		EvaluationGeneralStore,
		QuestionnaireSettings,
	} from 'src/store/Modules/Evaluation/General';
	import EvaluationWidget from '../../components/EvaluationWidget.vue';
	import { iResult } from 'src/interfaces/iResult';

	@Component({ components: { EvaluationWidget } })
	export default class ConclusionFlow extends Vue {
		@EvaluationGeneralStore.State
		settings!: QuestionnaireSettings | null;

		@EvaluationGeneralStore.State
		result!: iResult;

		get progress() {
			return (this.result.points / this.result.maxPoints) * 100;
		}

		get color() {
			if (this.progress <= 50) return 'red';
			if (this.progress <= 75) return 'amber';
			return 'light-green';
		}
	}
</script>
<style lang="scss" scoped>
	.cnt-result {
		height: 350px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
