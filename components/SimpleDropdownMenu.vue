<template>
	<Menu as="div" class="relative inline-block text-left">
		<div>
			<MenuButton
				class="font-medium tracking-wider flex justify-center rounded-full text-lg transition duration-300 items-center space-x-2 whitespace-nowrap"
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
					'lg:py-2 lg:px-5 py-2 px-3': buttonText,
					'p-4': !buttonText,
				}"
			>
				<Icon v-if="buttonIconLeft" :name="buttonIconLeft" />
				<span v-if="buttonText">
					{{ buttonText }}
				</span>
			</MenuButton>
		</div>
		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems
				class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-50 dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<div
					class="p-3 dark:text-white text-black flex flex-col divide-y-2 divide-gray-200/70 dark:divide-gray-700 space-y-2"
				>
					<slot />
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';

defineProps<{
	buttonStyle: 'solid' | 'ghost';
	buttonIconLeft: string;
	buttonText?: string;
}>();
</script>
