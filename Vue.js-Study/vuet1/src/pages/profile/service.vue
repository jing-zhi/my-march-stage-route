<template>
	<div class="service">
		<div class="service-top">
			<span>工具与服务</span>
		</div>
		<div class="service-last">
			<div class="service-icon" v-for="(item,index) in items " :key="index">
				<img :src="item.link"><br>
				<span>{{item.message}}</span>
			</div>
			<!-- 利用 v-for -->
		</div>
	</div>
</template>

<script>
	export default {
		name: "service",
		data() {
			return {
				items: [{
						link: require("../../assets/img/tabbar/f4b952a87e.png"),
						message: "客户服务"
					},
					{
						link: require("../../assets/img/tabbar/bfcb210d2110a7d8.png"),
						message: "我的预约"
					}, {
						link: require("../../assets/img/tabbar/bc8ff48c8b1.png"),
						message: "我的问答"
					}, {
						link: require("../../assets/img/tabbar/d716c6822cafa2b6.png"),
						message: "闲置换钱"
					}, {
						link: require("../../assets/img/tabbar/43485ba9e9.png"),
						message: "高价回收"
					},
				]
			}
		}
	}
</script>

<style scoped>

</style>
<style>
	.service {
		margin-top: 0.625rem;
		border-radius: 0.625rem;
		width: 100%;
		height: 16rem;
		background-color: white;
		overflow: hidden;
	}

	.service-top {
		position: relative;
		font-size: 14px;
		color: #2e2d2d;
		height: 38px;
		line-height: 38px;
		padding-left: 18px;
		font-weight: 700;
	}

	.service-top::after {
		position: absolute;
		left: 0;
		right: 0;
		height: 1px;
		background: #f2f2f2;
		bottom: 0;
		content: "";
	}

	.service-last {
		position: relative;
		top: 5px;
		/* display: flex; */
		/* float: left; */
		justify-content: flex-start;
		text-align: center;
		flex-wrap: wrap;
	}
	.service-icon {
		display: inline-block;
		float: left;
		margin-top: 10px;
		margin-left: 26px;
		padding: 0rem;
	}
	.service-icon img {
		width: 2.1875rem;
		height: 2.1875rem;
		
	}
	.service-icon span {
		display: block;
		    margin-top: 6px;
		    font-size: 11px;
		    color: #262626;
		    line-height: 1.2;
	}
</style>
