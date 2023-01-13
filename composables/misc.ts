export const awaitTime = (time: number) => new Promise<void>((r) => setTimeout(() => r(), time));
