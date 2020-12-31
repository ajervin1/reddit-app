<template>
	<section class="text-center">
		<ul class="pagination bg-secondary d-inline-flex">
			<li class="page-item">
				<a @click="handlePrev" class="page-link" aria-label="Previous">
					<i class="fe-chevron-left"></i>
					Prev
				</a>
			</li>
			<li class="page-item">
				<a @click="handleNext" class="page-link">
					Next
					<i class="fe-chevron-right"></i>
				</a>
			</li>
		</ul>
		
	</section>
</template>

<script>
	
	
	export default {
		name: 'Pagination',
		
		computed: {},
		methods: {
			async handleNext () {
				await this.$store.dispatch('next')
			},
			async handlePrev () {
				await this.$store.dispatch('prev')
			}
		}
	}
</script>
