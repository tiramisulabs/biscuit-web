<template>
	<ClientOnly>
		<Teleport to="#toast">
			<Transition
				enter-active-class="transition ease-out duration-100"
				enter-from-class="transform opacity-0 scale-95"
				enter-to-class="transform opacity-100 scale-100"
				leave-active-class="transition ease-in duration-75"
				leave-from-class="transform opacity-100 scale-100"
				leave-to-class="transform opacity-0 scale-95"
			>
				<div
					v-if="visible"
					class="p-3 lg:p-0 absolute z-50 botton-10 lg:top-10 lg:right-10 lg:w-72 w-full text-white cursor-pointer select-none"
					@click="$emit('close')"
				>
					<div
						class="flex w-full p-4 bg-gray-800 rounded-lg items-center space-x-2"
						:class="[{ color, 'justify-between': closeButton, 'justify-start': !closeButton }, color]"
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
	closeButton?: boolean;
	visible?: boolean;
}>();

const icon = computed(() =>
	props.type === 'success'
		? 'lucide:check'
		: props.type === 'error'
		? 'lucide:x'
		: props.type === 'warning'
		? 'file-warning'
		: 'help-circle',
);

const color = computed(() =>
	props.type === 'success'
		? 'bg-green-500'
		: props.type === 'error'
		? 'bg-red-500'
		: props.type === 'warning'
		? 'bg-yellow-500'
		: 'bg-blue-500',
);
</script>
