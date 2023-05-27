<template>
	<div class="myvip">
		<div class="vipcarall">
			<div class="head">

				<i class="iconafter" :class="{iconSelect: !active ,isactives : active}"
				@click="select()">
					<!-- after -->
				</i>
				<i class="icon-jd"></i>
				<div class="jd-title">
					<div>京东自营</div>
				</div>
				<div class="jd-btn">优惠券</div>
			</div>
			<div id="index" v-for="(obj,index) in items" :key="index">
				<div class="item.index">
					<div class="ii" :class="{iiSelect: !iactive ,iiisactives : iactive }"  @click="iiselect()" ></div>
					<div class="image-warp"><img :src="obj.url"></div>
					<div class="content">
						<div class="names">{{obj.message}}</div>
						<div class="price_line">
							<div class="price"><strong>￥{{obj.one}}</strong></div>
							<div class="num_wrap">
								<div><strong>-</strong></div>
								<div><input class="nihao" type="number" name="" id="" value="" /></div>
								<div><strong>+</strong></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myvipcar',
		methods:{
			select(){
				this.active = ! this.active
			}, 
			iiselect(){
				this.iactive = ! this.iactive
			}
		},
		data() {
			return {
				active: false,
				iactive:true,
				// 接收 来自vuex的值
			}
		}

	}
</script>

<style scoped>
	.head {
		box-sizing: border-box;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		justify-content: space-between;

		align-items: center;
		padding: 0 .9rem 0 2.5rem;
		margin: .9rem 0;
		z-index: 1;
	}

	.iconSelect {
		position: absolute;
		z-index: 1;
		display: block;
		top: 0;
		left: .9rem;
		width: .95rem;
		height: 100%;
	}

	.isactives::after {
		position: absolute;
		left: 8%;
		top: -8px;
		content: "";
		margin-left: -15px;
		background-image: url(../../assets/img/tabbar/danxuan2.png);
		background-size: 31px 31px;
		width: 31px;
		height: 31px;
		border-radius: 50%;
	}

	.iconSelect::after {
		position: absolute;
		left: 75%;
		top: -8px;
		content: "";
		margin-left: -15px;
		background-image: url(../../assets/img/tabbar/danxuan1.png);
		background-size: 31px 31px;
		width: 31px;
		height: 31px;
		border-radius: 50%;
	}

	.icon-jd {
		display: block;
		margin-right: 6px;
		width: 14px;
		height: 14px;
		background: url(../../assets/img/tabbar/icon_JD_jd.png) 0 0/14px 14px no-repeat;
	}

	.jd-title {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		box-sizing: border-box;
		font-size: .6rem;
		font-weight: 700;
		margin-right: .4rem;
		color: #333;
		overflow: hidden;
	}

	.title {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-flex: 1;
		flex: 1;
		box-sizing: border-box;
		font-size: .6rem;
		font-weight: 700;
		margin-right: .4rem;
		color: #333;
		overflow: hidden;
	}

	.title div {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.jd-btn {
		display: block;
		z-index: 1;
		position: relative;
		padding: .15rem .3rem;
		border-radius: .45rem;
		font-size: .5rem;
		line-height: 1;
		color: #f2270c;
		background: #fcedeb;
	}

	.num_wrap {
		position: relative;
		display: block;
		width: 3.3rem;
		border-radius: 2px;
		overflow: hidden;
		background-color: #fff;
		font-weight: 400;
	}

	#index {

		display: flex;
		justify-content: space-evenly;
		margin-top: .6rem;
		z-index: 1;
		position: relative;
		min-height: 5rem;
		padding: 0 .9rem 0 8.1rem;
		background: #fff;
	}

	.ii {
		background-color: aquamarine;
		position: absolute;
		left: 0;
		width: 2.5rem;
		height: 100%;
		background-repeat: no-repeat;
		background-size: 32px;

	}
.iiSelect {
	background-image: url(../../assets/img/tabbar/danxuan1.png);
}
.iiisactives {
	background-image: url(../../assets/img/tabbar/danxuan2.png);
}
	.ii::after {
		/* background-image: url(../../assets/img/tabbar/danxuan1.png); */
		z-index: 1;
		display: block;
		position: absolute;
		top: 0;
		background-size: 31px 31px;
		width: 31px;
		height: 31px;
	}

	.image-warp {
		position: absolute;
		left: 2.5rem;
		top: 0;
		width: 5rem;
		height: 5rem;
		overflow: hidden;
		box-shadow: 0 0.2rem 0.6rem 0 rgb(0 0 0 / 5%);
		border-radius: .3rem;
	}

	.image-warp img {
		width: 100%;
		height: 100%;
	}

	.content {
		position: relative;
		top: 20px;
	}

	.center {
		width: 100%;
		height: 100%;
	}

	.names {
		font-size: .6rem;
		margin-bottom: .3rem;
		word-break: break-all;
		position: relative;
	}

	.price_line {
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		margin: 5px 0 0;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		font-size: 10px;
	}

	.price {
		font-family: JDZH-Regular;
		font-display: swap;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		color: #f2270c;
		font-size: .6rem;
	}

	.num_wrap {
		position: relative;
		top: -2px;
		left: 26px;
		height: 38px;
		display: flex;
		/* display: block; */
		width: 3.3rem;
		justify-content: space-between;
		border-radius: 2px;
		background-color: #fff;
		font-weight: 400;
	}

	.nihao {
		width: 34px;
		height: 50%;
		-webkit-appearance: none;
		border: none;
		text-align: center;
		color: #262626;
		background-color: #f2f2f2;
		font-size: .55rem;
	}

	.num_wrap div {
		position: relative;
		top: 0.8125rem;
	}

	.is-active {
		width: 500px;
	}
</style>
