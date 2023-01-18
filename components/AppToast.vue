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
					class="p-3 lg:p-0 absolute z-50 botton-10 lg:top-10 lg:right-10 lg:w-72 w-full text-white"
				>
					<div
						class="flex w-full p-4 bg-gray-800 rounded-lg items-center space-x-2"
						:class="[{ color, 'justify-between': closeButton, 'justify-start': !closeButton }, color]"
					>
						<div class="rounded-full p-2 bg-gray-300/20 shrink-0 w-8 h-8 items-center flex">
							<Icon :name="icon" class="text-lg lg:text-xl" />
						</div>
						<p class="shrink-0">{{ message }}</p>
						<button
							v-if="closeButton"
							class="rounded-full p-2 bg-gray-300/20 hover:bg-red-300/50 active:bg-red-300/50 shrink-0 w-8 h-8 items-center flex hover:text-red-700 transition duration-200"
							@click="$emit('close')"
						>
							<Icon name="lucide:x" class="text-lg lg:text-xl" />
						</button>
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
