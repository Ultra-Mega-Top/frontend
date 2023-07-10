export function msToTime(duration: number) {
	const p = (v: number) => String(v).padStart(2, '0');

	const s = Math.floor((duration / 1000) % 60);
	const m = Math.floor((duration / (1000 * 60)) % 60);
	const h = Math.floor((duration / (1000 * 60 * 60)) % 24);

	if (h > 0) return `${p(h)}h ${p(m)}m ${p(s)}s`;
	if (m > 0) return `${p(m)}m ${p(s)}s`;
	return `${p(s)}s`;
}
