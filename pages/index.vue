<template>
    <main class="mx-auto px-12 max-w-screen-xl flex justify-between flex-col space-y-44">
        <section class="flex py-40 space-x-10">
            <div class="w-1/2 space-y-8">
                <div class="flex flex-col space-y-5">
                    <div class="flex text-gray-300 items-center space-x-2">
                        <Icon class="text-orange-400" name="lucide:flame" />
                        <p class="font-mono">Incredibly lightweight and object oriented</p>
                    </div>
                    <h1 class="text-6xl text-white font-semibold">
                        Create wonderful bots with
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">biscuitjs.</span>
                    </h1>
                    <h4 class="text-2xl text-gray-200">
                        A brand new bleeding edge non bloated Discord library.
                    </h4>
                </div>
                <ul class="text-white font-medium tracking-wider">
                    <li class="space-x-2 my-3 items-center">
                        <Icon name="lucide:framer" class="text-3xl text-yellow-400 rounded-full bg-gray-200/10 p-1" />
                        <span>Memory efficient, -100Mb on 200k servers.</span>
                    </li>
                    <li class="space-x-2 my-3 items-center">
                        <Icon name="lucide:clipboard-signature"
                            class="text-3xl text-green-400 rounded-full bg-gray-200/10 p-1" />
                        <span>Easy to use, utility classes for better commands.</span>
                    </li>
                    <li class="space-x-2 my-3 items-center">
                        <Icon name="lucide:network" class="text-3xl text-purple-400 rounded-full bg-gray-200/10 p-1" />
                        <span>Escable, with microservices.</span>
                    </li>
                    <li class="space-x-2 my-3 items-center">
                        <Icon name="lucide:package-check"
                            class="text-3xl text-red-400 rounded-full bg-gray-200/10 p-1" />
                        <span>Optional cache, no more mandatory cache.</span>
                    </li>
                </ul>
                <div class="flex space-x-4 items-center">
                    <Button buttonStyle="solid" icon-left="lucide:party-popper">
                        Get started
                    </Button>
                    <Button buttonStyle="ghost" icon-left="lucide:github">
                        Github
                    </Button>
                </div>
            </div>
            <div class="w-1/2">
                <div
                    class="flex flex-col bg-gray-800 p-4 rounded-xl shadow-xl shadow-gray-800 space-y-5 hover:-translate-y-3 transition duration-300">
                    <div class="flex justify-between items-center">
                        <div class="flex space-x-3">
                            <div
                                class="bg-red-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300">
                            </div>
                            <div
                                class="bg-yellow-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300">
                            </div>
                            <div
                                class="bg-green-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300">
                            </div>
                        </div>
                        <h3 class="text-gray-500 font-medium text-md space-x-2 items-center">
                            <Icon name="lucide:folder" />
                            <span>~/biscuit/super-bot</span>
                        </h3>
                        <h3 class="text-gray-200 font-medium text-lg">Terminal</h3>
                    </div>
                    <hr class="w-full border-gray-600" />
                    <div class="flex flex-col bg-gray-900 w-full rounded-xl tracking-widest p-4">
                        <p class="text-white" v-for="command in commands" :key="command">
                            <span class="text-gray-500">$ ~/super-bot •</span> {{ command }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-6 max-w-4xl">
                <h1 class="text-5xl font-bold">
                    Some <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 font-extrabold">utilities</span>
                </h1>
                <h3 class="text-2xl text-gray-400">
                    Utilities that will help you to create a scalable bot based on
                    microservices totally efficient and with low resource usage.
                </h3>
                <NuxtLink href="/utilities" class="w-fit">
                    <h4 class="text-white text-xl font-medium space-x-2 hover:text-blue-400 transition duration-300">
                        <span>Discover more utilities</span>
                        <Icon name="lucide:corner-down-right" />
                    </h4>
                </NuxtLink>
            </div>
            <div class="grid gap-4 grid-cols-3">
                <div v-for="utility in utilities" :key="utility.name"
                    class="w-full rounded-xl bg-gray-800 hover:ring-4 transition duration-300 hover:ring-blue-400 hover:-translate-y-2">
                    <nuxt-img :src="utility.image" :alt="`Utility ${utility.name}`" class="w-full h-52 rounded-xl" />
                    <div class="p-4 space-y-2">
                        <h4 class="font-medium text-2xl">
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">@biscuitland
                                / </span>{{ utility.name }}
                        </h4>
                        <p class="text-gray-400">{{ utility.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-6 max-w-4xl">
                <h1 class="text-5xl font-bold">Statistics</h1>
                <h3 class="text-2xl text-gray-400">
                    Our usage statistics of the utilities in common, thanks to all the
                    loyal users who use them.
                </h3>
            </div>
            <div class="grid gap-4 grid-cols-4">
                <div
                    class="w-full p-4 rounded-xl bg-green-400 hover:ring-4 transition duration-300 hover:ring-green-800 hover:-translate-y-2 space-y-4">
                    <div class="bg-gray-200/30 w-fit p-2 rounded-lg">
                        <Icon class="text-3xl" name="lucide:download" />
                    </div>
                    <h1 class="text-5xl font-bold">1,223+</h1>
                    <h5 class="text-xl text-white font-medium">— Downloads</h5>
                </div>
                <div
                    class="w-full p-4 rounded-xl bg-orange-400 hover:ring-4 transition duration-300 hover:ring-orange-800 hover:-translate-y-2 space-y-4">
                    <div class="bg-gray-200/30 w-fit p-2 rounded-lg">
                        <Icon class="text-3xl" name="lucide:star" />
                    </div>
                    <h1 class="text-5xl font-bold">620+</h1>
                    <h5 class="text-xl text-white font-medium">— Stars</h5>
                </div>
                <div
                    class="w-full p-4 rounded-xl bg-purple-400 hover:ring-4 transition duration-300 hover:ring-purple-800 hover:-translate-y-2 space-y-4">
                    <div class="bg-gray-200/30 w-fit p-2 rounded-lg">
                        <Icon class="text-3xl" name="lucide:github" />
                    </div>
                    <h1 class="text-5xl font-bold">67+</h1>
                    <h5 class="text-xl text-white font-medium">— Forks</h5>
                </div>
                <div
                    class="w-full p-4 rounded-xl bg-blue-400 hover:ring-4 transition duration-300 hover:ring-blue-800 hover:-translate-y-2 space-y-4">
                    <div class="bg-gray-200/30 w-fit p-2 rounded-lg">
                        <Icon class="text-3xl" name="lucide:users" />
                    </div>
                    <h1 class="text-5xl font-bold">520+</h1>
                    <h5 class="text-xl text-white font-medium">— Discord members</h5>
                </div>
            </div>
        </section>
        <section class="flex pb-40 flex-col space-y-10 justify-center items-center">
            <div class="flex flex-col text-center space-y-5">
                <h1 class="text-5xl font-bold">
                    Start your <span class="text-blue-400">new adventure</span>
                </h1>
                <h4 class="text-2xl font-medium text-gray-300">
                    Develop bots efficiently and become a great Discord bot developer.
                </h4>
            </div>
            <div class="flex space-x-4">
                <Button button-style="solid" icon-left="lucide:user">
                    Join the support server
                </Button>
                <Button button-style="ghost" icon-left="lucide:github"> Github </Button>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
const commands = [
    "npm install @biscuitland/core",
    "npm run start",
    "",
    "================",
    "RAM usage: 10Mb",
    "Servers: 1,227",
    "Startup time: 5s",
    "================",
    "",
    "⚡ Bot successfully started.",
];

const utilities = [
    {
        name: "core",
        image: "https://www.biscuitjs.com/home/sections/core-code.webp",
        description:
            "Classes, functions and main structures to create an application with biscuit. Core contains the essentials to launch you to develop your own customized and scalable bot.",
    },
    {
        name: "api-types",
        image: "https://www.biscuitjs.com/home/sections/api-types-code.webp",
        description:
            "1:1 type definition with the latest available in the Discord API. No need to worry about your code typing anymore.",
    },
    {
        name: "cache",
        image: "https://www.biscuitjs.com/home/sections/cache-code.webp",
        description:
            "A cache will help you avoid making HTTP requests to the Discord api, saving you network resources and avoiding a possible Rate Limit.",
    },
];
</script>
