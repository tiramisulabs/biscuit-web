<template>
	<nav class="flex text-white items-center justify-between mx-auto px-12 py-8 max-w-7xl">
		<NuxtLink
			:to="'/'"
			class="space-x-4 flex items-center cursor-pointer hover:bg-blue-600/10 dark:hover:bg-blue-400/10 rounded-lg p-2 transition duration-300"
		>
			<nuxt-img src="/icon.svg" alt="biscuitland icon" class="w-auto h-9" />
			<h2 class="font-bold text-2xl text-black dark:text-white">
				biscuitland
				<span class="text-blue-400">/web</span>
			</h2>
		</NuxtLink>
		<div class="flex space-x-5 items-center">
			<ul class="flex space-x-5">
				<li
					v-for="menu in menuSections"
					:key="menu.path"
					class="font-semibold cursor-pointer hover:text-blue-400 text-black dark:text-white"
				>
					<NuxtLink :href="menu.path" active-class="text-blue-400">
						{{ menu.name }}
					</NuxtLink>
				</li>
			</ul>
			<div class="flex space-x-2">
				<NuxtLink :href="config.public.githubUrl" target="_blank">
					<SimpleButton button-style="solid" icon-left="lucide:github">Github</SimpleButton>
				</NuxtLink>
				<SimpleButton
					:icon-left="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
					button-style="ghost"
					@click="changeTheme"
				/>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const colorMode = useColorMode();

const menuSections = [
	{ name: 'Home', path: '/' },
	{ name: 'Utilities', path: '/utilities' },
	{ name: 'Discord Server', path: 'https://discord.gg/sTaJ744d' },
];

const changeTheme = () => {
	const theme = colorMode.value === 'dark' ? 'light' : 'dark';
	colorMode.preference = theme;
};
</script>
