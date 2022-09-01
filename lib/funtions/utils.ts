export const wait = (time: number) => {
	return new Promise<void>((r) => {
		setTimeout(() => r(), time);
	});
};

export const increateTimeMinutes = (minutes: number) => {
	return new Date(new Date().getTime() + new Date().getTime() * 60_000 * minutes);
};
