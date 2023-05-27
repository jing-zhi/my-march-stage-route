<template>
	<div class="imglist">

		<div class="top_all">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="(i,index) in 4" :key="index">
					<img :src="item.url">
					<!-- <img src="@/assets/img/tabbar/magic3.jpg" > -->
				</el-carousel-item>
			</el-carousel>
			<div class="textall">
				<span class="childr">￥<strong>{{item.one}}</strong>.00</span>
				<span class=""><em><img src="../../assets/img/tabbar/jiangjia.png"></em>降价通知</span>
				<span class=""><em><img src="../../assets/img/tabbar/soucang.png"></em>收藏</span>
			</div>
			<div class="text_last"><span><img
						src="../../assets/img/tabbar/ziying.png"><strong>{{item.message}}</strong></span></div>
		</div>
		<div class="gift">
			<div class="mood_dis">
				<span class="youhui" @sent="sendMsg()"><strong>优惠</strong></span>
				<div class="conent">
					<div class="dicount"><span class="manjian">赠品</span><span class="goumai">购买立享1件赠品（赠完即止）</span></div>
					<div class="dicount-two"><span class="manjian">满减</span><span class="goumai">满6299元减900元</span>
					</div>
					<div class="dicount-three"><span class="manjian">免费领</span><span class="gouma">体验卡免费领，超大流量任性用</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	// 将 子组件的值上传到父组件
	export default {
		name: "imglist",
		components: {

		},
		created() {
			this.goodsId = this.$route.query.iid;
			// console.log(this.goodsId+ "  test")
			for (var i = 0; i < this.obj.length; i++) {
				if (this.obj[i].iid == this.goodsId) {
					this.item = this.obj[i];
					// console.log(this.item)
				}
			}
		},
		data() {
			return {
				item: {},
				goodsId: 0,
				obj: [{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic1.jpg'),
						message: '荣耀（HONOR） 荣耀手表2Magic Watch2运动智能手表男女士心率防水蓝牙通话NFC扫码 碳石黑-运动款46mm(送钢皮表带大礼包) 官方标配',
						one: 99,
						three: '看相似',
						iid: 1
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic1.jpg'),
						message: '马克华菲（FAIRWHALE）名牌手表 新款男士全自动机械表 潮流多功能夜光男表防水瑞士品质时尚腕表 本色白面钢带',
						one: 98,
						three: '看相似',
						iid: 2
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic1.jpg'),
						message: 'Apple iPhone 11 Pro Max 苹果11promax手机  二手手机 绿色 64G ',
						one: 699,
						three: '看相似',
						iid: 3
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic2.jpg'),
						message: 'Apple iPhone 11 Pro Max 苹果11promax手机  二手手机 绿色 64G ',
						one: 399,
						three: '看相似',
						iid: 4
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic3.jpg'),
						message: '马克华菲（FAIRWHALE）名牌手表 新款男士全自动机械表 潮流多功能夜光男表防水瑞士品质时尚腕表 本色白面钢带',
						one: 299,
						three: '看相似',
						iid: 5
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic4.jpg'),
						message: ' 【华强北二代顶配版】Air蓝牙耳机无线适用苹果12/11华为小米oppo荣耀vivo手机酷泽尔洛达 二代1:1【改名定位+入耳检测+秒连接+无线充电】                             ',
						one: 199,
						three: '看相似',
						iid: 6
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic5.jpg'),
						message: 'Apple【Pencil套装版】iPad mini 5 2019年新款平板电脑 7.9英寸（64G WLAN版/A12芯片/MUQW2CH/A）深空灰色 ',
						one: 4599,
						three: '看相似',
						iid: 7
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						url: require('@/assets/img/tabbar/magic6.jpg'),
						message: '米 原装20W Type-C充电器 快充版 智能兼容 适用红米9苹果iphone12安卓redmi手机ipad等设备充电头 插头',
						one: 7999,
						three: '看相似',
						iid: 8
					}
				],
			}
		},
		methods: {

			// 子组件通过￥emit 出发自定义事件给父组件传值 
			sendMsg() {
				this.$emit("getMsg", this.item)
				console.log(this.item)
				console.log('我发送了文件')
			}
		}
	}
</script>

<style scoped>
	.top_all {
		background-color: white;
		border-radius: 1.25rem;
	}

	/* 轮播图使用组件 */
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item img {
		width: 20rem;
		height: 18.75rem;

	}

	/* 
	.el-carousel__item:nth-child(3) {
		width: 20rem;
		height: 18.75rem;
		background-size: cover;
		background-image: url(../../assets/img/tabbar/iphone1.jpg);
	}

	.el-carousel__item:nth-child(4) {
		width: 20rem;
		height: 18.75rem;
		background-size: cover;
		background-image: url(../../assets/img/tabbar/iPhone2.jpg);
	}

	.el-carousel__item:nth-child(5) {
		width: 20rem;
		height: 18.75rem;
		background-size: cover;
		background-image: url(../../assets/img/tabbar/iPhone3.jpg);
	}

	.el-carousel__item:nth-child(6) {
		width: 20rem;
		height: 18.75rem;
		background-size: cover;
		background-image: url(../../assets/img/tabbar/iPhone4.jpg);
	} */

	/* 价格差 */
	.imglist {
		background-color: #F2F2F2;
	}

	.childr {
		font-family: JDZH-Regular;
		font-size: 16px;
		line-height: 30px;
		color: #f2270c;
	}

	.textall {
		background-color: white;
		display: flex;
		justify-content: space-between;
	}

	.textall span {
		display: block;
	}

	.textall em img {
		width: 18px;
		height: 18px;
	}

	.childr strong {
		font-size: 1.25rem;
	}

	/* 自营的样式 */
	.text_last {
		background-color: white;
		margin-top: 0.25rem;
		margin-left: 0.625rem;
		margin-bottom: 0.3125rem;
		border-radius: 1.25rem;
		width: 18.75rem;
	}

	.text_last img {
		width: 24px;
		height: 13px;

	}

	.text_last span {
		margin-right: 5px !important;
		text-align: center;
		color: #262626;
		overflow: hidden;
		font-size: 16px;
		font-weight: 700;
		line-height: 21px;

	}

	/* 下方优惠活动 */
	.gift {
		margin-top: 0.625rem;
		width: 100%;
		height: 100px;
		background-color: white;
		border-radius: 12px;
		background-color: #fff;
		overflow: hidden;
	}

	.mood_dis {
		display: inline-block;
		width: 18.75rem;
		margin-left: 10px;
		padding: 0px;
	}

	.youhui {
		position: relative;
		top: -50px;
		font-family: "microsoft yahei";
		color: #000000;
	}

	.conent {
		display: inline-block;
		width: 250px;
		margin: 9px;
	}

	.conent div {
		margin-top: 5px;
	}

	.manjian {
		margin: 0px;
		width: 10px;
		height: 5px;
		border: 1 solid red;
		color: red;
		font-size: 10px;
	}

	.goumai {
		font-size: 13px;
		margin-left: 21px;
	}

	.gouma {
		font-size: 13px;
		margin-left: 21px;
	}
</style>
