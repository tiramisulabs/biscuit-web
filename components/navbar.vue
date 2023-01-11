<template>
    <nav class="flex text-white items-center justify-between mx-auto px-20 py-8 max-w-7xl">
        <NuxtLink :to="'/'">
            <div class="space-x-4 flex items-center cursor-pointer">
                <img src="~/assets/icon.svg" alt="@biscuit/land icon" class="w-auto h-9">
                <h2 class="font-bold text-2xl">biscuitland <span class="text-blue-400">/web</span></h2>
            </div>
        </NuxtLink>
        <div class="flex space-x-5 items-center">
            <ul class="flex space-x-5">
                <li v-for="menu in menuSections" class="font-semibold cursor-pointer hover:text-blue-400">
                    <NuxtLink :href="menu.path" active-class="text-blue-400">
                        {{ menu.name }}
                    </NuxtLink>
                </li>
            </ul>
            <button
                class="flex py-2 px-6 bg-blue-400 rounded-full items-center space-x-2 hover:bg-blue-200 transition duration-300 text-blue-800 font-semibold tracking-wider">
                <icon name="lucide:download" />
                <span>Install</span>
            </button>
        </div>
    </nav>
</template>


<script lang="ts" setup>
const menuSections = [{ name: 'Home', path: '/' }, { name: 'Utilities', path: '/utilities' }, { name: 'Discord Server', path: 'https://discord.gg/sTaJ744d' }]
const route = useRoute();
</script>