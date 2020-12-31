<template>
	<ul class="list-group w-25">
		<!--Subreddits-->
		<li class="list-group-item" v-for="subreddit in subreddits">
			<button class="badge badge-primary font-size-xs"
			        @click="changeSubreddit(subreddit.display_name)">
				{{ subreddit.display_name }}
			</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'SubReddits',
		computed: {
			subreddits () {
				return this.$store.state.subreddits
			},
			subreddit () {
				return this.$store.state.subreddit
			}
		},
		methods: {
			async changeSubreddit (subreddit) {
				await this.$store.dispatch('changeSubreddit', subreddit)
			}
		}
	}
</script>
