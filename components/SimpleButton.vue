<template>
	<button
		class="font-medium tracking-wider flex py-2 px-5 rounded-full text-lg transition duration-300 items-center space-x-2"
		:class="{
			'text-blue-900': buttonStyle === 'solid',
			'bg-blue-400': buttonStyle === 'solid',
			'hover:bg-blue-200': buttonStyle === 'solid',
			'text-blue-400': buttonStyle === 'ghost',
			'bg-blue-400/10': buttonStyle === 'ghost',
			'hover:bg-blue-400/20': buttonStyle === 'ghost',
		}"
	>
		<Icon v-if="iconLeft" :name="iconLeft" />
		<span>
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
