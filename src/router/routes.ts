import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '*',
		component: () => import('pages/Error404.vue'),
	},
];

export default routes;
