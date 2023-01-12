<template>
    <nav class="flex text-white items-center justify-between mx-auto px-12 py-8 max-w-7xl">
        <NuxtLink :to="'/'"
            class="space-x-4 flex items-center cursor-pointer hover:bg-blue-400/10 rounded-lg p-2 transition duration-300">
            <nuxt-img src="/icon.svg" alt="biscuitland icon" class="w-auto h-9" />
            <h2 class="font-bold text-2xl">biscuitland <span class="text-blue-400">/web</span></h2>
        </NuxtLink>
        <div class="flex space-x-5 items-center">
            <ul class="flex space-x-5">
                <li v-for="menu in menuSections" :key="menu.path"
                    class="font-semibold cursor-pointer hover:text-blue-400">
                    <NuxtLink :href="menu.path" active-class="text-blue-400">
                        {{ menu.name }}
                    </NuxtLink>
                </li>
            </ul>
            <Button buttonStyle="solid" icon-left="lucide:github">Github</Button>
        </div>
    </nav>
</template>


<script lang="ts" setup>
const menuSections = [{ name: 'Home', path: '/' }, { name: 'Utilities', path: '/utilities' }, { name: 'Discord Server', path: 'https://discord.gg/sTaJ744d' }]
const route = useRoute();
</script>