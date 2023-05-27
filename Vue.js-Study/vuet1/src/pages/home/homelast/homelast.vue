<template>
	<div class="home-last">
		<ul class="home-last-ul">
			<!-- 加载路由跳转到详情页 -->
			<li class="home-last-li" v-for="(item, index)  in items " :key="index" @click="toURL(item.iid)" path="/detail">
				<!-- <a :href="item.link"> -->
				<div><img :src="item.url"><span class="home-last-span">{{item.message}}</span>
					<P class="info"><span class="itemall item-one"><strong>￥{{item.one}}</strong></span>
					</P>
					<span class="itemall item-three">{{item.three}}</span>
				</div>
				<!-- </a> -->
			</li>

		</ul>
	</div>
</template>

<script>
	export default {
		name: "hemelast",
		// computed:{

		// }
	
		data() {
			return {
				items: [{
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
			toURL: function(iid) {
				console.log(this.items)
				this.$router.push({
					path: '/detail',
					query:{
						iid
					},
				});
			}
		},
		
	}
</script>

<style scoped>
	.home-last {
		position: relative;
		width: 100%;
		margin-top: 0.8rem;
		top: 3.125rem;
	}

	.home-last-ul {
		display: flex;
		flex-wrap: wrap;
	}

	.home-last-span {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		color: #1a1a1a;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
	}

	.home-last-li {
		flex: 6;
		list-style: none;
	}

	.home-last-li a {
		text-decoration: none;
	}

	.home-last-li div {
		margin-left: 0.375rem;
		margin-right: 0.4375rem;
		margin-top: 0.5rem;
		background-color: white;
		border-radius: 0.5rem;
	}

	.home-last-li img {
		width: 9.1875rem;
		height: 9.1875rem;

	}

	.info {
		font-size: 13px;
		overflow: hidden;
		position: relative;
		height: 1.3rem;
	}

	.item-one {
		color: #fa2c19;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;

		top: 1px;
		height: 25px;
		line-height: 25px;
		font-family: JDZhengHT-EN-Regular;
	}

	.item-two {
		color: #fa2c19;
		position: relative;
		height: 25px;
		line-height: 25px;
		font-family: JDZhengHT-EN-Regular;
		font-size: 16px;
	}

	.item-three {
		position: relative;
		top: -1.2rem;
		right: -13.3em;
		text-align: center;
		color: grey;
		font-size: .5rem;
		height: 1.1rem;
		line-height: 1.1rem;
		padding: 0 .5em;
		background-color: #f0f2f5;
		border-radius: .55rem;
		border-top-right-radius: 0;
	}
</style>
