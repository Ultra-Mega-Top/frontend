import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
	interface Vue {
		$axios: AxiosInstance;
		$api: AxiosInstance;
	}
}

export const api = axios.create({
	baseURL: 'http://localhost:3000',
});

export default boot(({ Vue }) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	Vue.prototype.$axios = axios;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	Vue.prototype.$api = api;
});
