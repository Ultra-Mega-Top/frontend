export function Delay(timeMs = 100): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, timeMs);
	});
}
