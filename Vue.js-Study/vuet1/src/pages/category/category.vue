<template>
	<div id="category">
		<div class="cart-wrapper">
			<back></back>
			<div class="mycar"><span>
					<h3>购物车</h3>
				</span></div>
			<stillmore></stillmore>
		</div>
		<div class="tab-top">
			<div class="address">
				<div class="text">
					新乡市红旗区
				</div>
				<div class="wares"><span>
						编辑商品
					</span></div>
			</div>
		</div>
		<myvipcar></myvipcar>
		<div class="last-car">
			<div class="last-car_botton">
				<div class="last-car_bot"></div><span class="last-car_span">你好</span>
			</div>
			<div class="suanzhang"><span >{{}}</span></div>
			<div class="jiesuan">结算</div>
		</div>
	</div>
</template>

<script>
	import back from "../profile/back.vue"
	import stillmore from "../profile/stillmore.vue"
	import myvipcar from "./myvipcar.vue"
	export default {
		name: 'category',
		components: {
			back,
			stillmore,
			myvipcar,
		}
	}
</script>

<style scoped>
	#category {
		background-color: #F2F2F2;
	}

	.cart-wrapper {
		display: flex;
		justify-content: space-between;
		justify-content: middle;
	}

	.mycar {
		justify-content: center;
		line-height: 2.5rem;
	}

	.cart-wrapper::after {
		content: "";
		position: absolute;
		z-index: 1;
		top: 38px;
		pointer-events: none;
		background-color: #e5e5e5;
		height: 1px;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.tab-top {
		position: relative;
		padding: 0 .9rem;
		height: 2.45rem;
		border-radius: 0 0 .6rem .6rem;
		line-height: 2.45rem;
		background: #fff;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		font-size: .65rem;
		color: #262626;
	}

	.address {
		position: relative;
		display: flex;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 2;
		padding: 0 .9rem;
		white-space: nowrap;
		overflow: hidden;
	}

	.address::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -6px;
		background: url(../../assets/img/tabbar/lit.png);
		background-size: 12px 12px;
		width: 12px;
		height: 12px;
	}

	.address::after {
		content: "";
		position: absolute;
		width: 1px;
		height: .5rem;
		background: #bfbfbf;
		top: 50%;
		right: 70px;
		margin-top: -.25rem;
	}

	.text {
		max-width: 100%;
		color: #000000;
		display: inline-block;
		vertical-align: top;
	}

	.wares {
		display: block;
		position: relative;
		-webkit-flex-shrink: 0;
		flex-shrink: 0;
		margin-left: .9rem;
		right: -8.3125rem;
		color: white;
		background-color: #000000;
	}

	.last-car {
		position: fixed;
		bottom: 100px;
		width: 100%;
		height: 40px;
		background-color: #F2F2F2;
		display: flex;
		justify-content: space-between;
	}

	.last-car_bot::after {
		position: absolute;
		background-image: url(../../assets/img/tabbar/danxuan1.png);
		width: 31px;
		height: 31px;
		background-size: 31px 31px;
		content: "";
	}
.last-car_span {
	position: relative;
left: 2rem;
}
.last-car_bot {

}
	.last-car_botton {
		position: relative;
		left: 0px;
		top: 0px;

	}

	.suanzhang {
		position: relative;
		left: 0px;
		height: 0px;
	}

	.jiesuan {
		position: relative;
		left: 0px;
		height: 0px;
	}
</style>
