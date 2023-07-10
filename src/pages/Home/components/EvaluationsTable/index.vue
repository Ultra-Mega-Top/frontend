<template>
	<q-table
		title="Avaliações"
		:data="evaluations"
		:columns="columns"
		row-key="name"
		class="shadow-0"
	>
		<template v-slot:body-cell-correctAnswers="props">
			<q-td :props="props">
				<div class="q-gutter-xs">
					<q-badge
						v-for="[c] in props.value"
						:key="c"
						color="positive"
						:label="c - 1"
					/>
				</div>
			</q-td>
		</template>
		<template v-slot:body-cell-wrongAnswers="props">
			<q-td :props="props">
				<div class="q-gutter-xs">
					<q-badge
						v-for="[e] in props.value"
						:key="e"
						color="negative"
						:label="e - 1"
					/>
				</div>
			</q-td>
		</template>
		<template v-slot:body-cell-actions="props">
			<q-td :props="props">
				<div class="q-gutter-xs">
					<q-btn flat round icon="search" />
					<q-btn flat round icon="delete" color="negative" />
				</div>
			</q-td>
		</template>
	</q-table>
</template>
<script lang="ts">
	import { HomeStore, ShortEvaluation } from 'src/store/Modules/Home';
	import { Component, Vue } from 'vue-property-decorator';

	import { columns } from './Utils/columns';

	@Component
	export default class EvaluationsTable extends Vue {
		columns = columns;

		@HomeStore.State
		evaluations!: ShortEvaluation[];
	}
</script>
<style lang="scss" scoped></style>
