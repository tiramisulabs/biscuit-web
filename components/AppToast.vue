<template>
	<ClientOnly>
		<Teleport to="#toast">
			<Transition
				enter-active-class="transition ease-out duration-300"
				enter-from-class="transform opacity-0 -translate-y-3"
				enter-to-class="transform opacity-100 translate-y-0"
				leave-active-class="transition ease-in duration-300"
				leave-from-class="transform opacity-100 translate-y-0"
				leave-to-class="transform opacity-0 -translate-y-3"
			>
				<div
					v-if="visible"
					class="p-3 lg:p-0 absolute z-50 botton-10 lg:top-10 lg:right-10 lg:w-72 w-full text-white cursor-pointer select-none"
					@click="$emit('close')"
				>
					<div
						class="flex w-full p-4 justify-start bg-gray-800 rounded-lg items-center space-x-2"
						:class="[{ color }, color]"
					>
						<p class="shrink-0">{{ message }}</p>
					</div>
				</div>
			</Transition>
		</Teleport>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { ToastTypes } from '~~/composables/toast';

defineEmits(['close']);

const props = defineProps<{
	message: string;
	type: ToastTypes;
	visible?: boolean;
}>();

const color = computed(() =>
	props.type === 'success'
		? 'dark:bg-gray-900 border border-gray-300 bg-gray-200 dark:border-gray-800'
		: props.type === 'error'
		  ? 'bg-red-500'
		  : props.type === 'warning'
		    ? 'bg-yellow-500'
		    : 'bg-blue-500',
);
</script>
