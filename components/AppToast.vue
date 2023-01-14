<template>
	<div class="p-3 lg:p-0 absolute z-50 botton-10 lg:top-10 lg:right-10 lg:w-72 w-full">
		<div class="flex w-full p-4 bg-gray-800 rounded-lg items-center justify-between space-x-2" :class="[color]">
			<div class="rounded-full p-2 bg-gray-300/20 shrink-0 w-8 h-8 items-center flex">
				<Icon :name="iconLeft" class="text-lg lg:text-xl" />
			</div>
			<p class="shrink-0">{{ message }}</p>
			<button
				v-if="closeButton"
				class="rounded-full p-2 bg-gray-300/20 hover:bg-red-300/50 active:bg-red-300/50 shrink-0 w-8 h-8 items-center flex"
				@click="closeButton?.()"
			>
				<Icon name="lucide:x" class="text-lg lg:text-xl" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{ message: string; color: string; iconLeft: string; closeButton?: () => void }>();
</script>
