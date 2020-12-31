<template>
	<article class="border bg-secondary p-2">
		<h6>{{ post.title }}</h6>
		<div class="video-container">
			<video controls :src="post.media.reddit_video.fallback_url"></video>
		</div>

	</article>
</template>

<script>
	export default {
		name: 'PostVideo',
		props: [ 'post' ],
		data () {
			return {}
		}
	}
</script>
