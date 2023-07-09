import { FmNotify } from './Notify';

export class WarningError extends Error {}
export class CriticalError extends Error {}

export class ApiError {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static resolve(error: any) {
		const message = new FmNotify();

		if (error instanceof WarningError) {
			return message.warning(error.message);
		}

		if (error instanceof CriticalError) {
			return message.negative(error.message);
		}

		if (error instanceof Error) {
			return message.negative(error.message);
		}

		if (typeof error === 'string') {
			return message.negative(error);
		}

		message.warning('Infelizmente ocorreu um erro inesperado!');
		console.log(error);
	}
}
