<template>
	<Head>
		<Title>biscuitland — {{ pkg?.name }}</Title>
		<Meta name="description" :content="pkg?.description" />
	</Head>
	<main class="mx-auto px-6 lg:px-12 max-w-screen-xl space-y-6 min-h-screen">
		<section class="p-0 md:p-8 bg-gray-100 dark:bg-gray-800 rounded-t-xl space-y-5">
			<div class="flex flex-col space-y-5">
				<ul class="flex space-x-5 items-center w-full justify-center lg:justify-start overflow-x-auto">
					<NuxtLink
						v-for="utility in utilities"
						:key="utility.name"
						:to="`/utilities/${utility.name}`"
						active-class="font-bold border-b-2 border-blue-400 bg-blue-400/10 rounded-t-lg"
					>
						<li class="py-2 px-4 transition duration-300 font-mono uppercase hover:font-bold">
							{{ utility.name }}
						</li>
					</NuxtLink>
				</ul>
				<hr class="dark:border-gray-700 border-gray-300" />
			</div>
			<div
				class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center text-center lg:text-left p-8 lg:p-0"
			>
				<div
					class="p-4 bg-gradient-to-r bg-gray-400/20 dark:bg-gray-700/20 rounded-lg items-center justify-center shrink-0"
				>
					<Icon
						:name="utilitySelected?.icon ?? 'lucide:network'"
						class="h-full w-28 bg-gray-400/20 dark:bg-gray-700/40 rounded-lg p-2 text-black dark:text-white"
					/>
				</div>
				<div v-if="!pending" class="flex flex-col space-y-2 w-full">
					<h1 class="text-4xl">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500 font-bold"
						>
							@biscuitland /
						</span>
						<span class="font-medium">{{ route.params.name }}</span>
					</h1>
					<p class="text-gray-400">
						{{ pkg?.description }}
					</p>
					<hr class="dark:border-gray-700 border-gray-300" />
					<div class="flex space-x-2 text-gray-400 justify-center lg:justify-start">
						<p>{{ pkg?.downloads }} installations</p>
						<p>—</p>
						<p>Version {{ pkg?.version }}</p>
					</div>
				</div>
				<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
					<div class="w-full h-8 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
					<hr class="dark:border-gray-700 border-gray-300" />
					<div class="w-full h-4 bg-slate-700 rounded" />
				</div>
				<button
					class="p-4 bg-black rounded-xl shrink-0 font-mono hover:ring-blue-400 hover:ring-4 transition duration-200 text-white"
					@click="copyInstallCommand()"
				>
					$ pnpm install @biscuitland/{{ route.params.name }}
				</button>
			</div>
		</section>
		<section class="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
			<div class="w-full lg:w-[70%] bg-gray-100 dark:bg-gray-800 rounded-b-xl p-8">
				<article
					v-if="!pending"
					class="prose dark:prose-invert max-w-none prose-a:text-blue-400 break-words"
					v-html="readme"
				></article>
				<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
					<div class="w-full h-8 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
					<div class="w-full h-8 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
					<div class="w-full h-8 bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-700 rounded" />
				</div>
			</div>
			<div class="w-full lg:w-[30%]">
				<div class="bg-gray-100 dark:bg-gray-800 rounded-b-xl p-4 space-y-3 sticky top-5">
					<h4 class="font-medium text-xl">Useful links</h4>
					<ul v-if="!pending">
						<li class="hover:text-blue-400 transition duration-150">
							<NuxtLink
								:href="`https://github.com/oasisjs/biscuit/tree/main/packages/${route.params.name}`"
								target="_blank"
								class="flex space-x-2 items-center"
							>
								<Icon name="lucide:github" />
								<p>Github respository</p>
							</NuxtLink>
						</li>
						<li class="hover:text-blue-400 transition duration-150">
							<NuxtLink
								href="https://github.com/oasisjs/biscuit/issues"
								target="_blank"
								class="flex space-x-2 items-center"
							>
								<Icon name="lucide:flag-triangle-right" />
								<p>Report issue</p>
							</NuxtLink>
						</li>
						<li class="hover:text-blue-400 transition duration-150">
							<NuxtLink
								href="https://github.com/oasisjs/biscuit/pulls"
								target="_blank"
								class="flex space-x-2 items-center"
							>
								<Icon name="lucide:git-pull-request" />
								<p>Pull request</p>
							</NuxtLink>
						</li>
					</ul>
					<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
						<div class="w-full h-4 bg-slate-700 rounded" />
						<div class="w-full h-4 bg-slate-700 rounded" />
						<div class="w-full h-4 bg-slate-700 rounded" />
					</div>
				</div>
			</div>
		</section>
	</main>
	<AppToast
		:visible="toast.visible.value"
		:message="toast.message.value"
		:type="toast.type.value"
		:close-button="true"
		@close="toast.hide()"
	/>
</template>

<script lang="ts" setup>
import { marked } from 'marked';

const route = useRoute();

const utilities = [
	{ name: 'api-types', icon: 'lucide:type', color: 'blue' },
	{ name: 'cache', icon: 'lucide:save', color: 'red' },
	{ name: 'core', icon: 'lucide:network', color: 'yellow' },
	{ name: 'helpers', icon: 'lucide:help-circle', color: 'pink' },
	{ name: 'rest', icon: 'lucide:wifi', color: 'purple' },
	{ name: 'ws', icon: 'lucide:component', color: 'orange' },
];
const utilitySelected = computed(() => utilities.find((u) => u.name === route.params.name));
const toast = useToast(5_000, 'Install command copied', 'success');

const { data: pkg, pending } = useFetch(`/api/package/${route.params.name}`);
const readme = computed(() => marked(pkg.value?.readme ?? '# Readme not found :('));

const copyInstallCommand = () => {
	toast.show();
	navigator.clipboard.writeText('xd?');
};
</script>
