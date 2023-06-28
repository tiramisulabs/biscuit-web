<template>
	<main class="mx-auto px-6 lg:px-12 max-w-screen-xl flex justify-between flex-col space-y-44">
		<Head>
			<Title>biscuitland - A brand new bleeding edge non bloated Discord library</Title>
			<Meta name="description" content="A brand new bleeding edge non bloated Discord library." />
		</Head>
		<section class="flex py-10 lg:pb-28 space-y-10 lg:space-y-0 lg:space-x-10 flex-col lg:flex-row">
			<div class="w-full lg:w-1/2 space-y-8">
				<div class="flex flex-col space-y-5">
					<div class="flex text-gray-500 dark:text-gray-300 items-center space-x-2">
						<Icon class="text-orange-400" name="lucide:flame" />
						<p class="font-mono text-xs md:text-md lg:text-lg">Incredibly lightweight and minimalistic</p>
					</div>
					<h1 class="text-4xl lg:text-5xl text-black dark:text-white font-extrabold">
						Create wonderful bots with
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500"
						>
							Biscuit.
						</span>
					</h1>
					<h4 class="text-lg lg:text-xl text-gray-500 dark:text-gray-200">
						A brand new bleeding edge non bloated Discord library.
					</h4>
				</div>
				<ul class="text-black dark:text-white font-medium tracking-wider">
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/60 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex shrink-0"
						>
							<Icon name="lucide:zap" class="text-lg lg:text-xl text-yellow-400" />
						</div>
						<span class="text-sm lg:text-md">Remarkably minimal memory footprint</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/60 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex shrink-0"
						>
							<Icon name="lucide:package-open" class="text-lg lg:text-xl text-green-400" />
						</div>
						<span class="text-sm lg:text-md">Utilities out of the box</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/60 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex shrink-0"
						>
							<Icon name="lucide:network" class="text-lg lg:text-xl text-purple-400" />
						</div>
						<span class="text-sm lg:text-md">Microservice based</span>
					</li>
					<li class="space-x-2 my-3 items-center flex">
						<div
							class="rounded-full p-2 bg-gray-300/60 dark:bg-gray-200/10 w-10 h-10 items-center justify-center flex shrink-0"
						>
							<Icon name="lucide:hard-drive" class="text-lg lg:text-xl text-red-400" />
						</div>
						<span class="text-sm lg:text-md">Optional cache</span>
					</li>
				</ul>
				<div class="flex space-y-6 md:space-y-0 space-x-0 md:space-x-4 items-center flex-col md:flex-row">
					<div
						class="w-full lg:w-fit bg-gray-200 dark:text-gray-100 text-gray-800 dark:bg-gray-900 p-3 rounded-lg font-mono cursor-pointer ring-blue-400 hover:ring-2 transition duration-100"
						button-style="solid"
						icon-left="lucide:party-popper"
						@click="copyInstallCommand()"
					>
						$ npm install @biscuitland/core
					</div>
					<NuxtLink class="w-full lg:w-fit" :href="config.public.githubUrl" target="_blank">
						<SimpleButton class="w-full lg:w-fit" button-style="ghost" icon-left="lucide:github">
							GitHub
						</SimpleButton>
					</NuxtLink>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<ConsolePreview :commands="commands" />
			</div>
		</section>
		<section class="flex flex-col space-y-10">
			<div class="flex flex-col space-y-3 max-w-4xl">
				<h1 class="text-4xl lg:text-5xl font-bold text-black dark:text-white">Batteries included</h1>
				<h3 class="text-lg lg:text-xl text-gray-500 dark:text-gray-400">
					Biscuit microservices will help you to create a scalable, non-bloated Discord bot.
				</h3>
				<NuxtLink to="/utilities/core" class="w-fit">
					<h4 class="hover:text-blue-400 transition duration-100 text-lg lg:text-xl font-medium">
						Discover more utilities
						<Icon name="lucide:arrow-right" />
					</h4>
				</NuxtLink>
			</div>
			<div class="grid gap-8 lg:gap-4 grid-cols-1 lg:grid-cols-3">
				<div
					v-for="utility in utilities"
					:key="utility.name"
					class="w-full rounded-xl cursor-pointer bg-gray-50 dark:bg-gray-900 hover:ring-2 transition duration-300 ring-blue-600 dark:ring-blue-400"
				>
					<NuxtImg
						:quality="80"
						:src="utility.image"
						:alt="`Utility ${utility.name}`"
						class="w-full h-52 rounded-t-xl"
					/>
					<div class="p-4 space-y-2">
						<h4 class="font-medium text-xl lg:text-2xl text-black dark:text-white">
							<span
								class="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-green-400 from-blue-500 to-green-500"
							>
								@biscuitland/
							</span>
							{{ utility.name }}
						</h4>
						<p class="text-gray-600 dark:text-gray-200">{{ utility.description }}</p>
					</div>
				</div>
			</div>
		</section>
		<section class="flex flex-col space-y-10">
			<div class="flex flex-col space-y-3 max-w-4xl">
				<h1 class="text-4xl lg:text-5xl font-bold dark:text-white text-black">Statistics</h1>
				<h3 class="text-lg lg:text-xl dark:text-gray-400 text-gray-500">
					Our usage statistics of the core utility, thanks to all the loyal users who use them.
				</h3>
			</div>
			<div class="grid gap-8 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="w-full p-4 rounded-xl bg-green-600 hover:ring-4 transition duration-150 hover:ring-green-600 dark:hover:ring-green-800 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:download" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">{{ pending ? '0-0' : stats?.downloads }}+</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Downloads</h5>
				</div>
				<div
					class="w-full p-4 rounded-xl bg-orange-600 hover:ring-4 transition duration-150 hover:ring-orange-600 dark:hover:ring-orange-800 space-y-4"
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
					class="w-full p-4 rounded-xl bg-purple-600 hover:ring-4 transition duration-150 hover:ring-purple-600 dark:hover:ring-purple-800 space-y-4"
				>
					<div class="bg-gray-200/30 w-fit p-1 lg:p-2 rounded-lg text-white">
						<Icon class="text-3xl" name="lucide:github" />
					</div>
					<h1 class="text-4xl lg:text-5xl font-bold text-white">{{ pending ? '0-0' : stats?.forks }}+</h1>
					<h5 class="text-lg lg:text-xl text-white font-medium">— Forks</h5>
				</div>
				<div
					class="w-full p-4 rounded-xl bg-blue-600 hover:ring-4 transition duration-150 hover:ring-blue-600 dark:hover:ring-blue-800 space-y-4"
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
		<AppToast
			:visible="toast.visible.value"
			:message="toast.message.value"
			:type="toast.type.value"
			:close-button="true"
			@close="toast.hide()"
		/>
	</main>
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
	'Memory used: 10Mb',
	'Servers: 1.8k',
	'Ready on: 3558ms',
	'================',
	'',
	'✨ Ready!',
];

const utilities = [
	{
		name: 'core',
		image: '/code/core.webp',
		description: 'Core contains the essentials to launch you to develop your own customized and scalable bot.',
	},
	{
		name: 'helpers',
		image: '/code/helpers.webp',
		description:
			'A collection of builders to make your life easier, not built into the core library due to performance concerns.',
	},
	{
		name: 'common',
		image: '/code/common.webp',
		description:
			'Custom types, functions and utility classes, a feature-rich package for sharing in the biscuit libraries.',
	},
];

const copyInstallCommand = () => {
	toast.show();
	navigator.clipboard.writeText('npm install @biscuitland/core');
};
</script>
