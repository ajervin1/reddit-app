<template>
	<article class="border bg-secondary p-2">
		<div class="image-container">
			<img :src="post.thumbnail"/>
		</div>
		<h6>{{ post.title }}</h6>
		<div>
			<a :href="post.url" class="btn-link mr-3 font-size-sm">Go To Link</a>
		</div>
	
	</article>
</template>

<script>
	export default {
		name: 'PostLink',
		props: [ 'post' ],
		data () {
			return {}
		}
	}
</script>
