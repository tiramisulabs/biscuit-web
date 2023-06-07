<template>
	<div class="dark:bg-gray-900 bg-white min-h-screen">
		<div id="toast"></div>
		<AppNavbar />
		<slot />
		<footer
			class="bg-gray-100 dark:bg-gray-800 w-full p-6 flex items-center justify-center flex-col space-y-5 rounded-t-3xl text-center mt-5"
		>
			<NuxtImg
				src="/icon.svg"
				alt="biscuitland icon"
				class="w-16 h-16 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 p-2 cursor-pointer transition duration-300 rounded-full"
			/>
			<h1 class="text-xl dark:text-white text-black font-semibold">
				Made with ❤️ by
				<NuxtLink :href="config.public.secretDiscordSupportUrl" target="_blank">
					<span
						class="text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 rounded-lg pl-1 transition duration-300 mr-1"
					>
						@biscuitland
					</span>
				</NuxtLink>
				team.
			</h1>
		</footer>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
