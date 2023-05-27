<template>
	<div id="app">
		<router-view />
		<vslot></vslot>
	</div>
</template>

<script>
	// 引用
	import vslot from "./components/tabber/vslot.vue"
	// 注册
	export default {
		name: "App",
		components: {
			// TabBar,
			// TabBaritem,
			vslot
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");

	#app {
		width: 100vw;
		max-width: 760px;
		margin: 0 auto;
		overflow: hidden;
		/* background-color: rgb(246, 246, 246); */
	}
</style>
