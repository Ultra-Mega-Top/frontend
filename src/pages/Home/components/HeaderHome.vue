<template>
	<div class="header-home">
		<q-select
			label="Avaliação"
			class="input bg-white"
			:value="choosenQuestionnaire"
			:loading="loading"
			:disabled="loading"
			@input="handleSetQuestionnaire"
			:options="questionnaires"
			emit-value
			map-options
			option-label="title"
			option-value="_id"
			outlined
		/>

		<q-btn
			label="Novo avaliação"
			color="primary"
			unelevated
			to="/panel/questionnaire/new"
		/>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import { HomeStore } from 'src/store/Modules/Home';
	import { PersistDataStore } from 'src/store/Modules/PersistData';

	@Component
	export default class HeaderHome extends Vue {
		loading = false;

		@PersistDataStore.State
		choosenQuestionnaire!: string;

		@PersistDataStore.Mutation('SET_QUESTIONNAIRE')
		setQuestionnaire!: (p: string) => void;

		@HomeStore.Action
		loadEvaluations!: (p: string) => Promise<void>;

		@HomeStore.State
		questionnaires!: { _id: string; title: string }[];

		async handleSetQuestionnaire(questionnaireId: string) {
			this.loading = true;
			this.setQuestionnaire(questionnaireId);
			await this.loadEvaluations(questionnaireId);
			this.loading = false;
		}
	}
</script>
<style lang="scss" scoped>
	.header-home {
		display: flex;
		align-content: center;
		justify-content: space-between;
		gap: 1em;

		.input {
			flex-grow: 1;
		}
	}
</style>
