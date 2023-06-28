<template>
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
html {
	font-family: 'Inter', sans-serif;
}

html[class*='light'] {
	color-scheme: light;
}

html[class*='dark'] {
	color-scheme: dark;
}
</style>
