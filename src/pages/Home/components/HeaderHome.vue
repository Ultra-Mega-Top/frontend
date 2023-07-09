<template>
	<div class="header-home">
		<q-select
			label="Avaliação"
			class="input bg-white"
			:value="choosenQuestionnaire"
			@input="setQuestionnaire"
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
		@PersistDataStore.State
		choosenQuestionnaire!: string;

		@PersistDataStore.Mutation('SET_QUESTIONNAIRE')
		setQuestionnaire!: (p: string) => void;

		@HomeStore.State
		questionnaires!: { _id: string; title: string }[];
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
