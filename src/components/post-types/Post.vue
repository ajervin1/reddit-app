<template>
	<article class="border bg-secondary p-2">
	
		<h6>{{ post.title }}</h6>
		
	</article>
</template>

<script>
	export default {
		name: 'Post',
		props: ['post'],
		data () {
			return {}
		}
	}
</script>
<style>
	.img-thumb {
		width: 140px;
		height: 140px;
	}
</style>
