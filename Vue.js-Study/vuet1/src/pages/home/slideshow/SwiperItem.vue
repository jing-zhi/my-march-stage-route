<template>
	<div class="slide">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Slide"
	};
</script>

<style scoped>
	.slide {
		width: 100%;
		flex-shrink: 0;
	display: flex;
	        text-align: center;
	}

	.slide img {
		width: 92%;
		left: 50%;
		top: 50%;
		border-radius: 0.75rem;
		
	}
</style>
