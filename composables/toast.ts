export const useToast = (time: number) => {
	const isVisible = useState(() => false);
	const showAction = async () => {
		isVisible.value = true;
		await awaitTime(time);
		isVisible.value = false;
	};

	const hideAction = () => {
		isVisible.value = false;
	};

	return { showAction, hideAction, isVisible };
};
