<template>
	<div>
		<main id="main-container" class="d-flex">
			<SubReddits class="mb-4" />
			<PostList class="flex-grow-1 pl-5"/>
		</main>
	
		<Pagination class="mb-4" />
	</div>
</template>

<script>
	import PostList from '../components/PostList'
	import SubReddits from '../components/SubReddits'
	import Pagination from '../components/Pagination'
	
	export default {
		name: 'Home',
		components: { Pagination, SubReddits, PostList },
	}
</script>
