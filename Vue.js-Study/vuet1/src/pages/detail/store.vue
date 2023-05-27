<template>
	<div class="store">
		<div class="flexall" >
			<div class="dianpu" ><img src="../../assets/img/tabbar/dian1.png"><span>店铺</span></div>
			<div class="customer"><img src="../../assets/img/tabbar/dian2.png"><span>店铺</span></div>
			<div class="licar"><img src="../../assets/img/tabbar/dian3.png"><span>店铺</span></div>
		</div>
		<div id="cart">
			<div class="addcar" @click="addcar()"> <span><strong>加入购物车</strong></span></div>
			<div class="buy"><span><strong>立即购买</strong></span> </div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "store",
		// 父组件传来的值 子组件接收    这是一个接收值的
		// props:{""}
		data() {
			return {
			}
		},
		created() {
			this.goodsId = this.$route.query.iid;
		},
		// 点击事件 使详情页的信息放到购物车中 
		methods: {
			addcar() {
				// 获取购物车所需要展示的信息
				const product = {}
				product.image = this.obj.name
				console.log(product.image )
			},
			
		}
	}
</script>

<style scoped>
	.store {
		background-color: white;
		margin-top: 10px;
		border-radius: 10px;
		/* z-index: 9999; */
		height: 120px;
		display: flex;
		justify-content: space-between;
	}

	.flexall {
		margin-top: 2px;
		display: flex;
		margin: 0px;
		padding: 0px;
		justify-content: space-between;
	}

	/* 下发给的所有东西 */
	.flexall img {
		width: 20px;
		height: 25px;
	}

	.flexall span {
		display: block;
		font-family: "bradley hand itc";
		font-size: 12px;

	}

	.flexall div {
		width: 48px;
		height: 50px;
		margin-left: 0px;
		text-align: center;
		margin-top: 12px;
	}

	#cart {
		width: 176px;
		height: 44px;
		/* background-color: #0000EE; */
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}

	#cart div {
		margin-left: 0px;
		margin-top: 0px;
		text-align: center;
	}

	#cart span {
		font-size: 13px;
		height: 40px;
		line-height: 40px;
		color: white;
		justify-content: center;
	}

	.addcar {
		height: 44px;
		width: 80px;
		border-radius: 20px;
		background-color: #F2270C;

	}

	.buy {
		height: 44px;
		width: 70px;
		border-radius: 20px;
		background-color: #FFC20D;

	}
</style>
