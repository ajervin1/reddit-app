<template>
	<div id="app">
		
		
		<router-view/>
	</div>
</template>

<script>
	
	
	
	
	import SubReddits from './components/SubReddits'
	
	export default {
		name: 'App',
		components: { SubReddits },
		computed: {
			state () {
				return this.$store.state
			}
		}
	}
</script>
