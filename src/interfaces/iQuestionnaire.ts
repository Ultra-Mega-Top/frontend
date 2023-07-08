import { iQuestion } from './iQuestion';

export interface iQuestionnaire {
	_id?: string;

	title: string;
	maxEvaluation: number;
	questions: iQuestion[];

	createdAt?: Date;
	updatedAt?: Date;
}
