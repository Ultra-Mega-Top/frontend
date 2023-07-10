export interface iResult {
	rule: 'simple';
	hits: [number, string][];
	mistakes: [number, string][];
	points: number;
	maxPoints: number;
	totalQuestions: number;
	pointsPerQuestion: number;
}
