import { QuestionProtocol } from '../registry';
import { iStaticSelective } from './interfaces/iStaticSelective';
import { StaticSelectiveFactory } from './utils/factory';

import StaticSelectiveEditable from './components/editable/index.vue';
import StaticSelectiveRuntime from './components/runtime/index.vue';
import StaticSelectiveViewer from './components/viewer/index.vue';

export class StaticSelective implements QuestionProtocol {
	qType = 'static-selective';

	editable() {
		return StaticSelectiveEditable;
	}

	viewer() {
		return StaticSelectiveRuntime;
	}

	runtime() {
		return StaticSelectiveViewer;
	}

	factory() {
		return StaticSelectiveFactory();
	}

	validate(question: iStaticSelective) {
		const titleIsValid = question.title.length > 3;

		return titleIsValid;
	}
}
