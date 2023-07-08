import { QuestionProtocol } from '../registry';
import { StaticSelectiveFactory } from './utils/factory';

import StaticSelectiveEditable from './components/editable/index.vue';
import StaticSelectiveRuntime from './components/runtime/index.vue';
import StaticSelectiveViewer from './components/viewer/index.vue';
import { iQuestion } from 'src/interfaces/iQuestion';
import { iStaticSelective } from './interfaces/iStaticSelective';

export class StaticSelective implements QuestionProtocol {
	type = 'static-selective';

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

	validate(question: iQuestion | iStaticSelective) {
		const titleIsValid = question.title.length > 3;

		return titleIsValid;
	}
}
