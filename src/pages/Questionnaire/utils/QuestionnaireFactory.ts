import { cloneDeep } from 'lodash';
import { iQuestionnaire } from 'src/interfaces/iQuestionnaire';

import { StaticSelectiveFactory } from 'src/components/questions/StaticSelective/utils/factory';

export function QuestionnaireFactory() {
	return cloneDeep<iQuestionnaire>({
		title: '',
		maxEvaluation: 100,
		questions: [StaticSelectiveFactory()],
	});
}
