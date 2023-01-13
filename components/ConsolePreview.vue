<template>
	<div
		class="flex flex-col bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-xl shadow-gray-200 dark:shadow-gray-800 space-y-5 hover:-translate-y-3 transition duration-300"
	>
		<div class="flex justify-between items-center">
			<div class="flex space-x-3">
				<div
					class="bg-red-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300"
				></div>
				<div
					class="bg-yellow-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300"
				></div>
				<div
					class="bg-green-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300"
				></div>
			</div>
			<h3 class="text-gray-500 font-medium text-md space-x-2 items-center hidden lg:flex">
				<Icon name="lucide:folder" />
				<span>~/biscuit/super-bot</span>
			</h3>
			<h3 class="text-gray-400 dark:text-gray-200 font-medium text-lg">Terminal</h3>
		</div>
		<hr class="w-full border-gray-600" />
		<div class="flex flex-col bg-gray-900 w-full rounded-xl tracking-widest p-4">
			<p v-for="command in commands" :key="command" class="text-white">
				<span class="text-gray-500">$ ~/super-bot •</span>
				{{ command }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ commands: string[] }>();
</script>
