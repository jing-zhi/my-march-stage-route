<template>
	<div class="payfor">
		<div class="payfor-conter">
			<div class="waitfor" v-for="(item,index) in items " :key="index">
				<img :src="item.link">
				<span>{{item.message}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payfor",
		data() {
			return {
				items: [{
						link: require("../../assets/img/tabbar/71971b102d1fcbc5.png"),
						message: "待付款",
					},
					{
						link: require("../../assets/img/tabbar/b392f9ce63eb8490.png"),
						message: "待收货",
					},
					{
						link: require("../../assets/img/tabbar/1491d4cb340074bb.png"),
						message: "退换/售后",
					},
					{
						link: require("../../assets/img/tabbar/3ab434ec2686a256.png"),
						message: "全部订单",
					},
				]
			}
		}
	}
</script>

<style scoped>
	.payfor-conter {
		/* display: flex; */
		padding: 0rem;
		margin: 0rem;
	}

	.payfor {
		position: relative;
		display: block;
		width: 100%;
		height: 88px;
		top: -10px;
		/* 暂时设定高度 后面内容撑起 动态过渡 */
		border-radius: 0.75rem;
		background-color: white;
	}

	.payfor-conter {
		position: relative;
		top: 22px;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}

	.waitfor {
		margin: 0rem;
		padding: 0rem;
	}

	.waitfor img {
		margin: 0 auto;
		width: 28px;
		height: 28px;
		display: inline;
		display: block;
	}
	.waitfor span {
		color: rgb(38.38.38);
		font-size: 12px;
		font-family: "microsoft yahei";
line-height: 2.15rem;
	}
</style>
<style>

</style>
