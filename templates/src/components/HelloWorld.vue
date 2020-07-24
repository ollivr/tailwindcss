<template>
	<section class="w-2/3 text-center">
		<h1 class="mb-1 text-4xl font-thin uppercase">{{ message }}</h1>
		<p class="mb-6 text-lg text-gray-400">
			Edit <code class="text-green-500">components/HelloWorld.vue</code> to test
			hot module replacement.
		</p>
		<button
			:class="[
				'px-4 py-2',
				'bg-gray-800 rounded-md shadow-md',
				'focus:outline-none focus:shadow-outline',
			]"
			@click="count++"
		>
			Count is <span class="text-green-500">{{ count }}</span>
		</button>
	</section>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		message: String,
	},
	data: () => ({
		count: 0,
	}),
};
</script>
