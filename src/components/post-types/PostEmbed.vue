<template>
	<article class="border bg-secondary p-2">
		<div v-html="post.media_embed.content"></div>
		<h6>{{ post.title }}</h6>
	</article>
</template>

<script>
	export default {
		name: 'PostEmbed',
		props: [ 'post' ],
		data () {
			return {}
		}
	}
</script>
