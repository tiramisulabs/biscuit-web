<template>
	<nav class="flex text-white items-center justify-between mx-auto px-6 lg:px-12 py-8 max-w-7xl">
		<NuxtLink :to="'/'" class="cursor-pointer hover:underline transition duration-150">
			<NuxtImg src="/icon.svg" alt="biscuitland icon" class="w-12 hover:scale-110 duration-150" />
		</NuxtLink>
		<div class="hidden lg:flex space-x-5 items-center">
			<ul class="flex space-x-5">
				<li
					v-for="menu in menuSections"
					:key="menu.path"
					class="font-semibold hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white"
				>
					<NuxtLink :to="menu.path" active-class="text-blue-600 dark:text-blue-400">
						{{ menu.name }}
					</NuxtLink>
				</li>
			</ul>
			<div class="flex space-x-2 items-center">
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
		<SimpleDropdownMenu class="lg:hidden" button-style="solid" button-icon-left="lucide:menu">
			<div class="flex flex-col">
				<p class="font-bold pb-2 pl-1 text-sm">Menu</p>
				<ul class="space-y-3">
					<li
						v-for="menu in menuSections"
						:key="menu.path"
						class="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white"
					>
						<NuxtLink :to="menu.path" active-class="text-blue-400">
							{{ menu.name }}
						</NuxtLink>
					</li>
					<li class="hover:text-blue-600 dark:hover:text-blue-400 text-black dark:text-white">
						<NuxtLink :href="config.public.githubUrl" target="_blank">Github</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="flex flex-col pt-2">
				<p class="font-bold pb-2 pl-1 text-sm">Theme</p>
				<ul class="space-y-3">
					<li>
						<SimpleButton
							:icon-left="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
							class="w-full"
							button-style="ghost"
							@click="changeTheme"
						>
							{{ colorMode.value === 'dark' ? 'Dark' : 'Light' }}
						</SimpleButton>
					</li>
				</ul>
			</div>
		</SimpleDropdownMenu>
	</nav>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const colorMode = useColorMode();

const menuSections = [
	{ name: 'Home', path: '/' },
	{ name: 'Utilities', path: '/utilities/core' },
	{ name: 'Discord Server', path: 'https://discord.gg/sTaJ744d' },
];

const changeTheme = () => {
	const theme = colorMode.value === 'dark' ? 'light' : 'dark';
	colorMode.preference = theme;
};
</script>
