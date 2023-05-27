<template>
	<div class="sort-top" @click="addRoute()" >
		<img src="../../../assets/img/tabbar/caidan.png">
		<!-- //加上点击路由跳转 -->
	</div>
</template>

<script>
	export default {
		name: "sort",
		methods:{
			addRoute() {
				this.$router.push('/cart');
			}
		}
	}
</script>

<style scoped>
	.sort-top {
		display: flex;
		width: 3rem;
		height: 3rem;
		 justify-content: center;
		align-items: center;
	}

	.sort-top img {
		display: block;
		width: 1.875rem;
		height: 1.875rem;
	}
</style>
