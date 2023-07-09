export const columns = [
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
