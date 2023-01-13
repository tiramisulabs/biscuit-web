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
	app: {
		head: {
			titleTemplate: 'biscuitland - A brand new bleeding edge non bloated Discord library',
			meta: [
				{
					name: 'description',
					content: 'A brand new bleeding edge non bloated Discord library.',
				},
			],
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
	nitro: {
		prerender: {
			routes: ['/'],
		},
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
