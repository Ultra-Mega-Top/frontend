export class CountDown {
	private timerCtrl: any;

	constructor(private conter = 0) {
		this.timer();
	}

	timer() {
		this.timerCtrl = setInterval(() => {
			this.conter--;
			if (this.conter < 1) {
				if (this.timerCtrl) clearInterval(this.timerCtrl);
			}
		}, 1000);
	}

	close() {
		this.conter = 0;
		clearInterval(this.timerCtrl);
	}
}
