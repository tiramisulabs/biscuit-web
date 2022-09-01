export const wait = (time: number) => {
	return new Promise<void>((r) => {
		setTimeout(() => r(), time);
	});
};
