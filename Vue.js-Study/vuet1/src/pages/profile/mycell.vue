<template>
	<div id="mycell">
		<div class="payfor-cell">
			<div class="all-cell" v-for="(array,index) in arrays " :key="index">
				<img :src="array.link">
				<span>{{array.message}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mycell",
		data() {
			return {
				arrays: [{
						link: require("../../assets/img/tabbar/0.png"),
						message: '优惠券',
					},
					{
						link: require("../../assets/img/tabbar/0.png"),
						message: '白条',
					},
					{
						link: require("../../assets/img/tabbar/0.png"),
						message: '京豆',
					},
					{
						link: require("../../assets/img/tabbar/0.png"),
						message: '红包',
					},
					{
						link: require("../../assets/img/tabbar/ac40297eb801ec8d.png"),
						message: '我的资产',
					},
				]
			}
		}
	}
</script>

<style scoped>

</style>
<style>
	#mycell {
		position: relative;
		display: block;
		border-radius: 0.625rem;
		margin-top: 0.625rem;
		width: 100%;
		background-color: white;
		height: 5.125rem;
	}

	.payfor-cell {
		position: relative;
		display: flex;
		justify-content: space-around;
		text-align: center;
		top: 20px;
		margin: 0rem;
		padding: 0rem;
	}

	.all-cell img{
		margin: 0 auto;
		width: 28px;
		height: 28px;
		display: inline;
		display: block;
	}
	.all-cell span {
		color: rgb(38.38.38);
				font-size: 12px;
				font-family: "microsoft yahei";
		line-height: 2rem;
	}
</style>
