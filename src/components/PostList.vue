<template>
	<div class="row">
		<div class="col-4 mb-4" v-for="post in posts">
			<PostImage :post="post" v-if="post.post_hint == 'image'"/>
			<PostLink :post="post" v-else-if="post.post_hint =='link'"/>
			<PostVideo :post="post" v-else-if="post.post_hint == 'hosted:video'"/>
			<PostEmbed :post="post" v-else-if="post.post_hint == 'rich:video'"/>
			<Post v-else :post="post"/>
		</div>
	</div>
</template>

<script>
	import PostImage from './post-types/PostImage'
	import Post from './post-types/Post'
	import PostLink from './post-types/PostLink'
	import PostVideo from './post-types/PostVideo'
	import PostEmbed from './post-types/PostEmbed'
	
	export default {
		name: 'PostList',
		components: { PostEmbed, PostVideo, PostLink, Post, PostImage },
		data () {
			return {}
		},
		computed: {
			state () {
				return this.$store.state
			},
			posts () {
				return this.state.posts
			}
		}
	}
</script>
