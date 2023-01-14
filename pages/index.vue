<template>
	<main class="mx-auto px-6 lg:px-12 max-w-screen-xl flex justify-between flex-col space-y-44">
		<section class="flex py-10 lg:py-28 space-y-10 lg:space-y-0 lg:space-x-10 flex-col lg:flex-row">
			<div class="w-full lg:w-1/2 space-y-8">
				<div class="flex flex-col space-y-5">
					<div class="flex text-gray-500 dark:text-gray-300 items-center space-x-2">
						<Icon class="text-orange-400" name="lucide:flame" />
						<p class="font-mono text-xs md:text-md lg:text-lg">
							Incredibly lightweight and object oriented
						</p>
					</div>
					<h1 class="text-4xl lg:text-6xl text-black dark:text-white font-semibold">
						Create wonderful bots with
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500"
						>
							biscuitjs.
						</span>
					</h1>
					<h4 class="text-xl lg:text-2xl text-gray-400 dark:text-gray-200">
						A brand new bleeding edge non bloated Discord library.
					</h4>
				</div>
				<ul class="text-black dark:text-white font-medium tracking-wider">
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/10 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex"
						>
							<Icon name="lucide:framer" class="text-lg lg:text-xl text-yellow-400" />
						</div>
						<span class="text-sm lg:text-md">Memory efficient, -100Mb on 200k servers.</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/10 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex"
						>
							<Icon name="lucide:clipboard-signature" class="text-lg lg:text-xl text-green-400" />
						</div>
						<span class="text-sm lg:text-md">Easy to use, utility classes for better commands.</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/10 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex"
						>
							<Icon name="lucide:network" class="text-lg lg:text-xl text-purple-400" />
						</div>
						<span class="text-sm lg:text-md">Escable, with microservices.</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/10 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex"
						>
							<Icon name="lucide:package-check" class="text-lg lg:text-xl text-red-400" />
						</div>
						<span class="text-sm lg:text-md">Optional cache, no more mandatory cache.</span>
					</li>
				</ul>
				<div class="flex space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center flex-col md:flex-row">
					<div
						class="w-full lg:w-fit bg-black p-3 rounded-lg font-mono text-white shadow-black/30 dark:shadow-black/70 shadow-xl cursor-pointer"
						button-style="solid"
						icon-left="lucide:party-popper"
						@click="copyInstallCommand()"
					>
						$ npm install @biscuitland/core
					</div>
					<NuxtLink class="w-full lg:w-fit" :href="config.public.githubUrl" target="_blank">
						<SimpleButton class="w-full lg:w-fit" button-style="ghost" icon-left="lucide:github">
							Github
						</SimpleButton>
					</NuxtLink>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<ConsolePreview :commands="commands" />
			</div>
		</section>
		<section class="flex flex-col space-y-10">
			<div class="flex flex-col space-y-6 max-w-4xl">
				<h1 class="text-4xl lg:text-5xl font-bold text-black dark:text-white">
					Some
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-purple-400 font-extrabold from-green-500 to-purple-500"
					>
						utilities
					</span>
				</h1>
				<h3 class="text-lg lg:text-2xl text-gray-500 dark:text-gray-400">
					Utilities that will help you to create a scalable bot based on microservices totally efficient and
					with low resource usage.
				</h3>
				<NuxtLink to="/utilities" class="w-fit">
					<h4
						class="text-black dark:text-white text-lg lg:text-xl font-medium space-x-2 hover:text-blue-400 transition duration-300"
					>
						<span>Discover more utilities</span>
						<Icon name="lucide:corner-down-right" />
					</h4>
				</NuxtLink>
			</div>
			<div class="grid gap-8 lg:gap-4 grid-cols-1 lg:grid-cols-3">
				<div
					v-for="utility in utilities"
					:key="utility.name"
					class="w-full rounded-xl bg-gray-50 dark:bg-gray-800 hover:ring-4 transition duration-300 hover:ring-blue-600 dark:hover:ring-blue-400 hover:-translate-y-2"
				>
					<NuxtImg
						:quality="80"
						:src="utility.image"
						:alt="`Utility ${utility.name}`"
						class="w-full h-52 rounded-xl"
					/>
					<div class="p-4 space-y-2">
						<h4 class="font-medium text-xl lg:text-2xl text-black dark:text-white">
							<span
								class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500"
							>
								@biscuitland /
							</span>
							{{ utility.name }}
						</h4>
						<p class="text-gray-600 dark:text-gray-400">{{ utility.description }}</p>
					</div>
				</div>
			</div>
		</section>
		<section class="flex flex-col space-y-10">
			<div class="flex flex-col space-y-6 max-w-4xl">
				<h1 class="text-4xl lg:text-5xl font-bold dark:text-white text-black">Statistics</h1>
				<h3 class="text-lg lg:text-2xl dark:text-gray-400 text-gray-500">
					Our usage statistics of the core utility, thanks to all the loyal users who use them.
				</h3>
			</div>
			<div class="grid gap-8 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="w-full p-4 rounded-xl bg-green-400 hover:ring-4 transition duration-300 hover:ring-green-600 dark:hover:ring-green-800 hover:-translate-y-2 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:download" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">{{ pending ? '0-0' : stats?.downloads }}+</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Downloads</h5>
				</div>
				<div
					class="w-full p-4 rounded-xl bg-orange-400 hover:ring-4 transition duration-300 hover:ring-orange-600 dark:hover:ring-orange-800 hover:-translate-y-2 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:star" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">
						{{ pending ? '0-0' : stats?.stargazers }}+
					</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Stars</h5>
				</div>
				<div
					class="w-full p-4 rounded-xl bg-purple-400 hover:ring-4 transition duration-300 hover:ring-purple-600 dark:hover:ring-purple-800 hover:-translate-y-2 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:github" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">{{ pending ? '0-0' : stats?.forks }}+</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Forks</h5>
				</div>
				<div
					class="w-full p-4 rounded-xl bg-blue-400 hover:ring-4 transition duration-300 hover:ring-blue-600 dark:hover:ring-blue-800 hover:-translate-y-2 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:users" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">
						{{ pending ? '0-0' : stats?.discord_support_members }}+
					</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Discord members</h5>
				</div>
			</div>
		</section>
		<section class="flex pb-40 flex-col space-y-10 justify-center items-center">
			<div class="flex flex-col text-center space-y-5">
				<h1 class="text-4xl lg:text-5xl font-bold text-black dark:text-white">
					Start your
					<span class="text-blue-400">new adventure</span>
				</h1>
				<h4 class="text-md lg:text-2xl font-medium dark:text-gray-300 text-gray-500">
					Develop bots efficiently and become a great Discord bot developer.
				</h4>
			</div>
			<div class="flex md:space-x-4 flex-col md:flex-row space-y-4 md:space-y-0 w-full lg:w-fit">
				<NuxtLink class="w-full" :href="config.public.discordSupportUrl" target="_blank">
					<SimpleButton class="w-full" button-style="solid" icon-left="lucide:user">
						Support server
					</SimpleButton>
				</NuxtLink>
				<NuxtLink class="w-full" :href="config.public.githubUrl" target="_blank">
					<SimpleButton class="w-full" button-style="ghost" icon-left="lucide:github">Github</SimpleButton>
				</NuxtLink>
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
const toast = useToast(5_000, 'Install command copied', 'success');
const config = useRuntimeConfig();
const { data: stats, pending } = await useFetch('/api/stats');

const commands = [
	'npm install @biscuitland/core',
	'npm run start',
	'',
	'================',
	'RAM usage: 10Mb',
	'Servers: 1,227',
	'Startup time: 5s',
	'================',
	'',
	'⚡ Bot successfully started.',
];

const utilities = [
	{
		name: 'core',
		image: '/code/core.webp',
		description:
			'Classes, functions and main structures to create an application with biscuit. Core contains the essentials to launch you to develop your own customized and scalable bot.',
	},
	{
		name: 'api-types',
		image: '/code/api-types.webp',
		description:
			'1:1 type definition with the latest available in the Discord API. No need to worry about your code typing anymore.',
	},
	{
		name: 'cache',
		image: '/code/cache.webp',
		description:
			'A cache will help you avoid making HTTP requests to the Discord api, saving you network resources and avoiding a possible Rate Limit.',
	},
];

const copyInstallCommand = () => {
	toast.show();
	navigator.clipboard.writeText('xd?');
};
</script>
