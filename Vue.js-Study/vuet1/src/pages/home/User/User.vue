<template>
	<div class="user-bar" @click="addRoute()">
		<!-- 用户  -->
		<img src="../../../assets/img/tabbar/yonghu.png">
	</div>
</template>

<script>
	export default {
		name: "User",
		methods:{
			addRoute (){
				this.$router.push('/profile');
			}
		}
	}
</script>

<style scoped>
	.user-bar {	
		display: flex;
		width: 3rem;
		height: 3rem;
		 justify-content: center;
		align-items: center;
	}

	.user-bar img {
		width: 1.875rem;
		height: 1.875rem;
	}
</style>
