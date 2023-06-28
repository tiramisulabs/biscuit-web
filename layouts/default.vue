<template>
	<div class="dark:bg-gray-950 bg-white min-h-screen">
		<div id="toast" class="sticky top-0 right-0"></div>
		<AppNavbar />
		<slot />
		<footer
			class="bg-gray-100 dark:bg-gray-800 w-full p-6 flex items-center justify-center flex-col space-y-3 text-center mt-5"
		>
			<NuxtImg src="/icon.svg" alt="biscuitland icon" class="w-14 h-14 hover:scale-110 transition duration-150" />
			<h1 class="text-xl dark:text-white text-black font-semibold">
				Made with ❤️ by
				<NuxtLink class="underline" :href="config.public.secretDiscordSupportUrl" target="_blank">
					the biscuit team.
				</NuxtLink>
			</h1>
			<p>
				redesign by
				<NuxtLink href="https://github.com/simxnet" class="underline" target="_blank">simxnet</NuxtLink>
			</p>
		</footer>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
