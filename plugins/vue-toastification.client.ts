// @ts-expect-error typescript
import Toast from 'vue-toastification/dist/index.mjs';

export default defineNuxtPlugin((nuxtApp) => {
	const options = {
		position: 'top-right',
	};

	nuxtApp.vueApp.use(Toast, options);
});
