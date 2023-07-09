import { Notify } from 'quasar';

export class FmNotify {
	positive(message: string) {
		Notify.create({
			message,
			position: 'top-right',
			color: 'positive',
		});
	}

	negative(message: string) {
		Notify.create({
			message,
			position: 'top-right',
			color: 'negative',
		});
	}

	warning(message: string) {
		Notify.create({
			message,
			position: 'top-right',
			color: 'warning',
		});
	}
}
