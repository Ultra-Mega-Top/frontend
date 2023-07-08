import { StaticSelective } from './StaticSelective/StaticSelective';

export interface QuestionProtocol {
	qType: string;

	editable: () => any;
	viewer: () => any;
	runtime: () => any;
	factory: () => any;

	validate: (question: any) => boolean;
}

export const questions: QuestionProtocol[] = [new StaticSelective()];

export function findQuestionById(qType: string) {
	return questions.find((question) => question.qType === qType);
}
