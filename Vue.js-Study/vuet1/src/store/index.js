import Vue from 'vue'
import Vuex from 'vuex'
// 1.安装插件 
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
	state: {
		cartlist: [],
		items: [{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic1.jpg'),
				message: '荣耀（HONOR） 荣耀手表2Magic Watch2运动智能手表男女士心率防水蓝牙通话NFC扫码 碳石黑-运动款46mm(送钢皮表带大礼包) 官方标配',
				one: 99,
				three: '看相似',
				iid: 0
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic1.jpg'),
				message: '马克华菲（FAIRWHALE）名牌手表 新款男士全自动机械表 潮流多功能夜光男表防水瑞士品质时尚腕表 本色白面钢带',
				one: 98,
				three: '看相似',
				iid: 1
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic1.jpg'),
				message: 'Apple iPhone 11 Pro Max 苹果11promax手机  二手手机 绿色 64G ',
				one: 699,
				three: '看相似',
				iid: 2
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic2.jpg'),
				message: 'Apple iPhone 11 Pro Max 苹果11promax手机  二手手机 绿色 64G ',
				one: 399,
				three: '看相似',
				iid: 3
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic3.jpg'),
				message: '马克华菲（FAIRWHALE）名牌手表 新款男士全自动机械表 潮流多功能夜光男表防水瑞士品质时尚腕表 本色白面钢带',
				one: 299,
				three: '看相似',
				iid: 4
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic4.jpg'),
				message: ' 【华强北二代顶配版】Air蓝牙耳机无线适用苹果12/11华为小米oppo荣耀vivo手机酷泽尔洛达 二代1:1【改名定位+入耳检测+秒连接+无线充电】                             ',
				one: 199,
				three: '看相似',
				iid: 5
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic5.jpg'),
				message: 'Apple【Pencil套装版】iPad mini 5 2019年新款平板电脑 7.9英寸（64G WLAN版/A12芯片/MUQW2CH/A）深空灰色 ',
				one: 4599,
				three: '看相似',
				iid: 6
			},
			{
				link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
				url: require('@/assets/img/tabbar/magic6.jpg'),
				message: '米 原装20W Type-C充电器 快充版 智能兼容 适用红米9苹果iphone12安卓redmi手机ipad等设备充电头 插头',
				one: 7999,
				three: '看相似',
				iid: 7
			}
		],
	},

	mutations: {
		// moutations 唯一的目的就是修改state中的状态
		// mutations 中的每个方法尽可能完成的事件比较单一
		addcoucar (){
			
		},
		
	},
	actions: {
		 // 接收是
		 addcar(satte, payload) {
		 	// payload为添加的商品  查找之前是否有这个商品
		 	
		 	// let oldproduct = state.cartlist.find(item => item.iid === payload.iid)
		 	// // 2.判断oldproduct
		 	// if (oldproduct == -1 ) {
		 	// 	oldproduct.count += 1
		 	// } else {
		 	// 	payload.count = 1
		 	// 	state.cartlist.push(payload)
		 	// },
		 	// comiit Q
		 },
	}
})

// 接收数据 放在vuex里面  挂载到vue实例上
export default store
