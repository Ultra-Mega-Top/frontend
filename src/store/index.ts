import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import { CreateQuestionnaire } from './Modules/CreateQuestionnaire';
import { Home } from './Modules/Home';

export default store(function ({ Vue }) {
	Vue.use(Vuex);

	const Store = new Vuex.Store({
		modules: {
			Home,
			CreateQuestionnaire,
		},
		strict: !!process.env.DEBUGGING,
	});

	return Store;
});
