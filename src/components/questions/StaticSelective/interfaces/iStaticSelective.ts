export interface iStaticSelective {
	qId: string;

	title: string;

	options: {
		id: string;
		label: string;
		isCorrect: boolean;
	}[];
}
