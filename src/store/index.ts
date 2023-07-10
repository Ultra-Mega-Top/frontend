import Vuex from 'vuex';

import { store } from 'quasar/wrappers';
import createPersistedState from 'vuex-persistedstate';

import { Home } from './Modules/Home';
import { PersistData } from './Modules/PersistData';
import { CreateQuestionnaire } from './Modules/CreateQuestionnaire';
import { EvaluationGeneral } from './Modules/Evaluation/General';
import { EvaluationPresentation } from './Modules/Evaluation/Presentation';
import { EvaluationQuestionnaire } from './Modules/Evaluation/Questionnaire';

export default store(function ({ Vue }) {
	Vue.use(Vuex);

	const Store = new Vuex.Store({
		modules: {
			Home,
			PersistData,
			CreateQuestionnaire,
			EvaluationGeneral,
			EvaluationPresentation,
			EvaluationQuestionnaire,
		},
		plugins: [
			createPersistedState({
				paths: ['PersistData'],
			}),
		],
		strict: !!process.env.DEBUGGING,
	});

	return Store;
});
