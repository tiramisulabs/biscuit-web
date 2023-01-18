<template>
	<div id="toast"></div>
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
html[class*='light'] {
	color-scheme: light;
}

html[class*='dark'] {
	color-scheme: dark;
}
</style>
