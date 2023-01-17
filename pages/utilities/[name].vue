<template>
	<Head>
		<Title>biscuitland — {{ pkg?.name }}</Title>
		<Meta name="description" :content="pkg?.description" />
	</Head>
	<main class="mx-auto px-6 lg:px-12 max-w-screen-xl space-y-6 min-h-screen">
		<section class="bg-gray-100 dark:bg-gray-800 rounded-xl space-y-5 p-4">
			<div class="flex flex-col space-y-3">
				<div class="flex space-x-2 overflow-x-auto">
					<NuxtLink
						v-for="utility in utilities"
						:key="utility.name"
						:to="`/utilities/${utility.name}`"
						class="hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-md px-3 py-1 shrink-0"
						:active-class="`font-medium bg-gray-300/50 dark:bg-gray-700/50`"
					>
						{{ utility.name }}
					</NuxtLink>
				</div>
				<hr class="dark:border-gray-700 border-gray-300" />
			</div>
			<div
				class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center text-center lg:text-left"
			>
				<div
					class="p-4 bg-gradient-to-r bg-gray-400/20 dark:bg-gray-700/20 rounded-lg items-center justify-center shrink-0"
				>
					<Icon
						:name="utilitySelected?.icon ?? 'lucide:network'"
						class="h-full w-28 bg-gray-400/20 dark:bg-gray-700/40 rounded-lg p-2 text-black dark:text-white"
					/>
				</div>
				<div v-if="!pending" class="flex flex-col space-y-3 w-full">
					<h1 class="text-4xl font-bold">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500"
						>
							@biscuitland /
						</span>
						<span class="text-blue-600 dark:text-blue-400">{{ route.params.name }}</span>
					</h1>
					<p class="text-gray-500 dark:text-gray-400">
						{{ pkg?.description }}
					</p>
					<hr class="dark:border-gray-700 border-gray-300" />
					<div
						class="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 text-gray-500 dark:text-gray-400 justify-center lg:justify-start lg:items-center"
					>
						<p class="p-2 bg-gray-300/40 dark:bg-gray-700/40 rounded-md">
							<Icon name="lucide:download" />
							{{ pkg?.downloads }} installations
						</p>
						<p class="p-2 bg-gray-300/40 dark:bg-gray-700/40 rounded-md">
							<Icon name="lucide:package-check" />
							Version {{ pkg?.version }}
						</p>
					</div>
				</div>
				<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
					<div class="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
					<hr class="dark:border-gray-700 border-gray-300" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
				</div>
				<button
					class="p-4 bg-black rounded-xl shrink-0 font-mono dark:hover:ring-blue-400 hover:ring-blue-600 hover:ring-4 transition duration-200 text-white"
					@click="copyInstallCommand()"
				>
					$ pnpm install @biscuitland/{{ route.params.name }}
				</button>
			</div>
		</section>
		<section class="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
			<div class="w-full lg:w-[70%] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
				<div class="font-medium text-lg flex items-center space-x-2">
					<div class="p-1 bg-gray-300/40 dark:bg-gray-700/40 rounded-md flex items-center">
						<Icon name="lucide:book" />
					</div>
					<h4>Readme</h4>
				</div>
				<hr class="dark:border-gray-700 border-gray-300" />
				<article
					v-if="!pending"
					class="prose dark:prose-invert max-w-none dark:prose-a:text-blue-400 prose-a:text-blue-600 break-words"
					v-html="readme"
				></article>
				<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
					<div class="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded" />
					<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
				</div>
			</div>
			<div class="w-full lg:w-[30%]">
				<div class="flex flex-col space-y-5 sticky top-5">
					<div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-3">
						<div class="font-medium text-lg flex items-center space-x-2">
							<div class="p-1 bg-gray-300/40 dark:bg-gray-700/40 rounded-md flex items-center">
								<Icon name="lucide:link" />
							</div>
							<h4 class="font-medium text-lg">Useful links</h4>
						</div>
						<hr class="dark:border-gray-700 border-gray-300" />
						<ul v-if="!pending">
							<li class="hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">
								<NuxtLink
									:href="`https://github.com/oasisjs/biscuit/tree/main/packages/${route.params.name}`"
									target="_blank"
									class="flex space-x-2 items-center"
								>
									<Icon name="lucide:github" />
									<p>Github respository</p>
								</NuxtLink>
							</li>
							<li class="hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">
								<NuxtLink
									href="https://github.com/oasisjs/biscuit/issues"
									target="_blank"
									class="flex space-x-2 items-center"
								>
									<Icon name="lucide:flag-triangle-right" />
									<p>Report issue</p>
								</NuxtLink>
							</li>
							<li class="hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">
								<NuxtLink
									href="https://github.com/oasisjs/biscuit/pulls"
									target="_blank"
									class="flex space-x-2 items-center"
								>
									<Icon name="lucide:git-pull-request" />
									<p>Pull request</p>
								</NuxtLink>
							</li>
							<li class="hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">
								<NuxtLink
									:href="`https://docs.biscuitjs.com/modules/${utilitySelected?.name}_src.html`"
									target="_blank"
									class="flex space-x-2 items-center"
								>
									<Icon name="lucide:book" />
									<p>Documentation</p>
								</NuxtLink>
							</li>
						</ul>
						<div v-else class="w-full animate-pulse flex space-y-4 flex-col">
							<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded" />
						</div>
					</div>
					<div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-3">
						<div class="font-medium text-lg flex items-center space-x-2">
							<div class="p-1 bg-gray-300/40 dark:bg-gray-700/40 rounded-md flex items-center">
								<Icon name="lucide:user" />
							</div>
							<h4 class="font-medium text-lg">Maintainers</h4>
						</div>
						<hr class="dark:border-gray-700 border-gray-300" />
						<div v-if="!pending" class="grid grid-cols-3 gap-2">
							<NuxtLink
								v-for="maintainer in pkg?.maintainers"
								:key="maintainer.email"
								class="bg-gray-300/30 dark:bg-gray-700/30 p-1 rounded-lg text-center hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
								:href="`https://github.com/${maintainer.username}`"
								target="_blank"
							>
								{{ maintainer.username }}
							</NuxtLink>
						</div>
						<div v-else class="w-full animate-pulse flex space-x-2">
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
						</div>
					</div>
					<div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
						<div class="font-medium text-lg flex items-center space-x-2">
							<div class="p-1 bg-gray-300/40 dark:bg-gray-700/40 rounded-md flex items-center">
								<Icon name="lucide:bean" />
							</div>
							<h4 class="font-medium text-lg">Status</h4>
						</div>
						<hr class="dark:border-gray-700 border-gray-300" />
						<div v-if="!pending" class="flex flex-col space-y-3">
							<div v-for="(value, key) in pkg?.score" :key="key">
								<div
									class="bg-blue-600 dark:bg-blue-400 h-1 rounded-full"
									:style="`width: ${value}%`"
								/>
								<div class="flex justify-between items-center">
									<p class="capitalize">
										<Icon v-show="key === 'quality'" name="lucide:book-open-check" />
										<Icon v-show="key === 'popularity'" name="lucide:cat" />
										<Icon v-show="key === 'maintenance'" name="lucide:codepen" />
										{{ key }}
									</p>
									<p>{{ value }}%</p>
								</div>
							</div>
						</div>
						<div v-else class="w-full animate-pulse flex flex-col space-y-2">
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
							<div class="w-full h-6 bg-slate-200 dark:bg-slate-700 rounded" />
						</div>
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
	{ name: 'api-types', icon: 'lucide:type' },
	{ name: 'cache', icon: 'lucide:save' },
	{ name: 'core', icon: 'lucide:network' },
	{ name: 'helpers', icon: 'lucide:help-circle' },
	{ name: 'rest', icon: 'lucide:wifi' },
	{ name: 'ws', icon: 'lucide:component' },
];
const utilitySelected = computed(() => utilities.find((u) => u.name === route.params.name));
const toast = useToast(5_000, 'Install command copied', 'success');

const { data: pkg, pending } = useFetch(`/api/package/${route.params.name}`);
const readme = computed(() => marked(pkg.value?.readme ?? '# Readme not found :('));

const copyInstallCommand = () => {
	toast.show();
	navigator.clipboard.writeText('npm install @biscuitland/core');
};

if (!pkg.value && !pending.value) {
	showError({ statusCode: 404, statusMessage: 'Package Not Found', fatal: true });
}
</script>
