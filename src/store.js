import Vue from 'vue'
import Vuex from 'vuex'
import http from './api'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		subreddit: 'Home',
		posts: [],
		before: '',
		after: '',
		// Filters
		subreddits: [],
		//Comments
		comments: []
		
	},
	actions: {
		// Posts
		async getPosts (context, options = { next: null, prev: null }) {
			const { state } = context
			const { data: { data } } = await http.get(`/${ state.subreddit }.json`, {
				params: {
					after: options.next,
					before: options.prev,
				}
			})
			const { children } = data
			
			const posts = children.map(post => post.data)
			state.posts = posts
			state.posts = state.posts.filter(post => {
				return post.distinguished != 'moderator'
			})
			
			state.before = state.posts[ 0 ].name
			state.after = state.posts[ state.posts.length - 1 ].name
		},
		async next (context) {
			const { state } = context
			await context.dispatch('getPosts', { next: state.after })
		},
		async prev (context) {
			const { state } = context
			await context.dispatch('getPosts', { prev: state.before })
		},
		// Change Events
		async changeSubreddit (context, newsubreddit) {
			const { state } = context
			state.subreddit = newsubreddit
			await context.dispatch('getPosts')
		},
		async getPopularSubreddits (context) {
			const { state } = context
			const url = 'https://www.reddit.com/subreddits/popular.json'
			const { data: { data: { children } } } = await axios.get(url, {
				params: {
					limit: 10
				}
			})
			const subreddits = children.map(post => post.data)
			state.subreddits = subreddits
		},
		// Commments
		async getPostComments (context, post_id) {
			const { state } = context
			const { data } = await http.get(`/${ state.subreddit }/comments/${ post_id }.json`);
			console.log(data)
			let comments = data.map(d => d.data.children)
			comments = comments[ 1 ]
			comments = comments.map(c => c.data.body)
			state.comments = comments;
		}
		
	}
})

async function init () {
	await store.dispatch('getPosts');
	await store.dispatch('getPopularSubreddits');
	
}

init()



export default store
