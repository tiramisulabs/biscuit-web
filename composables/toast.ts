export type ToastTypes = 'warning' | 'error' | 'success' | 'info';

export const useToast = (time: number, m: string, t: ToastTypes) => {
	const visible = useState(() => false);
	const message = useState(() => m);
	const type = useState(() => t);

	const show = async () => {
		visible.value = true;
		await awaitTime(time);
		visible.value = false;
	};

	const hide = () => {
		visible.value = false;
	};

	return { show, hide, visible, message, type };
};
