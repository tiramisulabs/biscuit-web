<template>
	<footer
		class="bg-gray-50 dark:bg-gray-800 w-full p-6 flex items-center justify-center flex-col space-y-5 rounded-t-3xl text-center"
	>
		<nuxt-img
			src="/icon.svg"
			alt="biscuitland icon"
			class="w-16 h-16 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 p-2 cursor-pointer transition duration-300 rounded-full"
		/>
		<h1 class="text-xl dark:text-white text-black font-semibold">
			Made with ❤️ by
			<NuxtLink :href="config.public.secretDiscordSupportUrl" target="_blank">
				<span
					class="text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 rounded-lg p-1 cursor-pointer transition duration-300"
				>
					@biscuitland
				</span>
			</NuxtLink>
			team.
		</h1>
	</footer>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
