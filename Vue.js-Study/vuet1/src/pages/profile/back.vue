<template>
	<div class="back" @click="$router.back()">
		<div v-for="(item,index) in items" :key="index"><img :src="item.link">{{item.message}}
		</div>
	</div>
</template>

<script>
	export default {
		name: "back",
	
		data() {
			return {
				items: [{
					link: require("../../assets/img/tabbar/backl.png"),
				}, ]
			}
		},
	}
</script>

<style scoped>
	.back {
		margin-left: 0.3125rem;
		margin-top: 0.3125rem;
	}

	.back img {
		margin-left: 0.3125rem;
		margin-top: 0.3125rem;
		width: 25px;
		height: 25px;
	}
</style>
