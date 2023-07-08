import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/panel',
		component: () => import('layouts/PrivateArea/index.vue'),
		children: [
			{
				path: '',
				component: () => import('pages/Home/index.vue'),
			},
			{
				path: 'questionnaire/:questionnaireId',
				component: () => import('pages/Questionnaire/index.vue'),
			},
			{
				path: 'evaluation/:questionnaireId',
				component: () => import('pages/Evaluation/index.vue'),
			},
		],
	},
	{
		path: '*',
		component: () => import('pages/Error404.vue'),
	},
];

export default routes;
