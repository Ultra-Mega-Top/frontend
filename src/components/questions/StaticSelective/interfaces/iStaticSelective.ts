import { iQuestion } from 'src/interfaces/iQuestion';

export interface iStaticSelective extends iQuestion {
	correctId: string;

	options: {
		id: string;
		label: string;
	}[];
}
