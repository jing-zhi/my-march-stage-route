<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TabBar",
		
	}
</script>

<style>
	#tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		width: 100vw;
		height: 49px;
		justify-content: space-around;
		background-color: #f0f0f0;
		box-shadow: 0px -2px 8px 1px #eee;
	}

	#tab-bar {
		z-index: 999;
	}
</style>
