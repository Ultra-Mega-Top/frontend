<template>
	<q-table
		title="Avaliações"
		:data="rows"
		:columns="columns"
		row-key="name"
		class="shadow-0"
	>
		<template v-slot:body-cell-correctAnswers="props">
			<q-td :props="props">
				<div class="q-gutter-xs">
					<q-badge
						v-for="i in props.value"
						:key="i"
						color="positive"
						:label="i"
					/>
				</div>
			</q-td>
		</template>
		<template v-slot:body-cell-wrongAnswers="props">
			<q-td :props="props">
				<div class="q-gutter-xs">
					<q-badge
						v-for="i in props.value"
						:key="i"
						color="negative"
						:label="i"
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
	import { Component, Vue } from 'vue-property-decorator';

	import { columns } from './Utils/columns';

	@Component
	export default class EvaluationsTable extends Vue {
		columns = columns;

		rows = [
			{
				id: 12345678,
				name: 'John Due Jr',
				evaluation: '5/10',
				duration: '13:56',
				correctAnswers: [1, 2, 5, 8, 9],
				wrongAnswers: [3, 4, 6, 7, 10],
				date: new Date(),
			},
		];
	}
</script>
<style lang="scss" scoped></style>
