<template>
	<button
		class="font-medium tracking-wider flex rounded-full text-lg transition duration-300 items-center space-x-2"
		:class="{
			'dark:text-blue-900': buttonStyle === 'solid',
			'dark:bg-blue-400': buttonStyle === 'solid',
			'dark:hover:bg-blue-200': buttonStyle === 'solid',
			'text-blue-50': buttonStyle === 'solid',
			'bg-blue-500': buttonStyle === 'solid',
			'hover:bg-blue-800': buttonStyle === 'solid',
			'dark:text-blue-400': buttonStyle === 'ghost',
			'dark:bg-blue-400/10': buttonStyle === 'ghost',
			'dark:hover:bg-blue-400/20': buttonStyle === 'ghost',
			'text-blue-500': buttonStyle === 'ghost',
			'bg-blue-500/10': buttonStyle === 'ghost',
			'hover:bg-blue-600/20': buttonStyle === 'ghost',
			'py-2 px-5': $slots.default,
			'p-4': !$slots.default,
		}"
	>
		<Icon v-if="iconLeft" :name="iconLeft" />
		<span v-if="$slots.default">
			<slot />
		</span>
		<Icon v-if="iconRight" :name="iconRight" />
	</button>
</template>

<script lang="ts" setup>
defineProps<{
	buttonStyle: 'solid' | 'ghost';
	iconLeft?: string;
	iconRight?: string;
}>();
</script>
