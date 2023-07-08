import { iQuestion } from 'src/interfaces/iQuestion';
import { StaticSelective } from './StaticSelective/StaticSelective';

export interface QuestionProtocol {
	type: string;

	editable: () => any;
	viewer: () => any;
	runtime: () => any;

	factory: () => iQuestion;
	validate: (question: iQuestion) => boolean;
}

export const questions: QuestionProtocol[] = [new StaticSelective()];

export function findQuestionByType(type: string) {
	return questions.find((question) => question.type === type);
}
