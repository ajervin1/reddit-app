<template>
	<article class="border bg-secondary p-2">
		<h6>{{ post.title }}</h6>
		<div class="image-container">
			<img :src="post.url" class="post-image">
		</div>
	
	</article>
</template>

<script>
	export default {
		name: 'PostImage',
		props: [ 'post' ],
		data () {
			return {}
		}
	}
</script>
<style>
	.post-image {
		max-width: 100%;
		height: 300px
	}
</style>
