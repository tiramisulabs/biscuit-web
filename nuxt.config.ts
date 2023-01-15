// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@nuxt/image-edge',
		'@nuxtjs/web-vitals',
		'@nuxtjs/fontaine',
		'@nuxtjs/color-mode',
	],
	build: {
		transpile: ['marked'],
	},
	app: {
		head: {
			link: [
				{
					rel: 'shortcut icon',
					href: '/icon.svg',
					type: 'image/svg+xml',
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			githubUrl: 'https://github.com/oasisjs/biscuit',
			discordSupportUrl: 'https://discord.gg/RmW54ShzMA',
			secretDiscordSupportUrl: 'https://discord.gg/KAVzwsXdZu',
		},
	},
	routeRules: {
		'/': { swr: 3600 },
	},
	tailwindcss: {
		exposeConfig: true,
	},
	colorMode: {
		classSuffix: '',
		preference: 'light',
		fallback: 'dark',
	},
	webVitals: {
		provider: 'auto',
	},
});
