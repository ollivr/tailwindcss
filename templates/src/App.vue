<template>
	<main role="main" class="flex flex-col items-center justify-center h-full">
		<img alt="Vue logo" src="./assets/logo.png" class="w-24 mb-4" />
		<HelloWorld msg="Hello Vue 3.0 + Vite + Tailwind CSS" />
	</main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
	},
};
</script>
