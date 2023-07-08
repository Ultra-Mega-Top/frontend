import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import { CreateQuestionnaire } from './Modules/CreateQuestionnaire';

export default store(function ({ Vue }) {
	Vue.use(Vuex);

	const Store = new Vuex.Store({
		modules: {
			CreateQuestionnaire,
		},
		strict: !!process.env.DEBUGGING,
	});

	return Store;
});
