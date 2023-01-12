<template>
    <div class="px-24 py-44 mx-auto max-w-screen-xl flex justify-between space-x-12">
        <div class="w-1/2 space-y-8">
            <div class="flex flex-col space-y-5">
                <div class="flex text-gray-300 items-center space-x-2">
                    <Icon class="text-orange-400" name="lucide:flame" />
                    <p class="font-mono">Incredibly lightweight and object oriented</p>
                </div>
                <h1 class="text-6xl text-white font-semibold">
                    Create wonderful bots with
                    <span class="text-blue-400">biscuitjs.</span>
                </h1>
                <h4 class="text-2xl text-gray-200">
                    A brand new bleeding edge non bloated Discord library.
                </h4>
            </div>
            <ul class="text-white font-medium tracking-wider">
                <li class="space-x-2 my-3 items-center" v-for="feature in features">
                    <Icon :name="feature.icon" class="text-2xl text-blue-400" />
                    <span>{{ feature.description }}</span>
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
            <div class="flex flex-col bg-gray-800 p-4 rounded-xl shadow-xl shadow-gray-800 space-y-5">
                <div class="flex justify-between items-center">
                    <div class="flex space-x-3">
                        <div
                            class="bg-red-400 rounded-full w-5 h-5 cursor-pointer hover:scale-110 transition duration-300">
                        </div>
                        <div
                            class="bg-yellow-400 rounded-full w-5 h-5  cursor-pointer hover:scale-110 transition duration-300">
                        </div>
                        <div
                            class="bg-green-400 rounded-full w-5 h-5  cursor-pointer hover:scale-110 transition duration-300">
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
                    <p class="text-white" v-for="command in commands">
                        $ ~/super-bot - {{ command }}
                    </p>
                </div>
                <div class="flex items-center space-x-2 text-gray-300 font-medium justify-center">
                    <div class="flex items-center space-x-2">
                        <Icon name="lucide:download" class="text-orange-400" />
                        <p>5,000+</p>
                    </div>
                    <span>•</span>
                    <div class="flex items-center space-x-2">
                        <Icon name="lucide:star" class="text-yellow-400" />
                        <p>5,000+</p>
                    </div>
                    <span>•</span>
                    <div class="flex items-center space-x-2">
                        <Icon name="lucide:award" class="text-blue-400" />
                        <p>v1.0.0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const features = [
    {
        description: "Memory efficient, -100Mb on 200k servers.",
        icon: "lucide:framer",
    },
    {
        description: "Easy to use, utility classes for better commands.",
        icon: "lucide:clipboard-signature",
    },
    { description: "Escable, with microservices.", icon: "lucide:network" },
    {
        description: "Optional cache, no more mandatory cache.",
        icon: "lucide:package-check",
    },
];

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
    "Bot successfully started.",
];
</script>
