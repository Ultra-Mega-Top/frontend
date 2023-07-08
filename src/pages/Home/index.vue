<template>
	<div class="page-home q-py-md">
		<div class="cnt-chosen-test">
			<q-select
				label="Avaliação"
				class="input bg-white"
				value="1º trimestre"
				:options="mock"
				outlined
			/>
			<q-btn
				label="Novo avaliação"
				color="primary"
				unelevated
				to="/panel/questionnaire/new"
			/>
		</div>

		<div class="box q-mt-xl">
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
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class Home extends Vue {
		mock = ['1º trimestre'];

		columns = [
			{
				name: 'id',
				field: 'id',
				required: true,
				label: 'Maticula',
				align: 'left',
				sortable: true,
			},
			{
				name: 'name',
				field: 'name',
				required: true,
				label: 'Aluno',
				align: 'left',
				sortable: true,
			},

			{
				name: 'evaluation',
				label: 'Nota',
				field: 'evaluation',
				align: 'left',
				sortable: true,
			},
			{
				name: 'duration',
				align: 'left',
				label: 'Duração',
				field: 'duration',
			},
			{
				name: 'correctAnswers',
				align: 'left',
				label: 'Questões corretas',
				field: 'correctAnswers',
			},
			{
				name: 'wrongAnswers',
				align: 'left',
				label: 'Questões erradas',
				field: 'wrongAnswers',
			},
			{
				name: 'date',
				align: 'left',
				label: 'Feita em',
				field: (d: { date: Date }) => {
					return new Date(d.date).toLocaleDateString('pt-br');
				},
			},
			{
				name: 'actions',
				align: 'right',
				label: 'Ações',
			},
		];

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
<style lang="scss" scoped>
	.page-home {
		.box {
			border: 1px solid $grey-5;
			border-radius: 4px;
		}
	}

	.cnt-chosen-test {
		display: flex;
		align-content: center;
		justify-content: space-between;
		gap: 1em;
		width: 800px;

		.input {
			width: calc(100% - 164px);
		}
	}
</style>
