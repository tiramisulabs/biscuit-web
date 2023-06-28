<template>
	<div class="flex flex-col bg-gray-50 dark:bg-gray-900 p-4 rounded-xl space-y-5">
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
			<h3 class="text-gray-400 font-medium text-md space-x-2 items-center hidden lg:flex">
				<Icon name="lucide:folder" />
				<span>~/bsct/bot</span>
			</h3>
			<h3 class="dark:text-gray-400 dark:text-gray-200 font-medium text-lg">Terminal</h3>
		</div>
		<div class="flex flex-col bg-gray-100 dark:bg-gray-950 w-full rounded-xl tracking-widest p-4">
			<p v-for="command in commands" :key="command" class="dark:text-white text-gray-700">
				<span class="text-emerald-500">[ /bsct/bot ]</span>
				$
				{{ command }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ commands: string[] }>();
</script>
