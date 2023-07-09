export class Deferred<T> {
	promise: Promise<T>;
	resolve!: (payload: T) => void;
	reject!: (error: any) => void;

	constructor() {
		this.promise = new Promise<T>((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
	}
}
