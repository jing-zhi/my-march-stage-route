<template>
	<!-- <router-view></router-view> -->
	<div id="cart">
		<back></back>
		<searchbar></searchbar>
		<!-- 使用组件在这一个块中跳转  -->
		<!-- <使用插槽在这个页面中加入元素 -->
		
		<el-tabs class="cart-tabs" :tab-position="tabPosition" style="height: 468px;">
			<el-tab-pane label="热门推荐">热门推荐
				<ul class="cart-ul">
					<li v-for="(item, index) in items">
						<a :href="item.url">
							<div><img :src="item.link"><span>{{item.message}}</span></div>
						</a>
					</li>
				</ul>
			</el-tab-pane>
			<el-tab-pane label="手机数码">手机数码
			<ul class="cart-ul">
				<li v-for="(array, index) in arrays">
					<a :href="array.url">
						<div><img :src="array.link"><span>{{array.message}}</span></div>
					</a>
				</li>
			</ul>
			</el-tab-pane>
			<el-tab-pane label="京东超市">京东超市</el-tab-pane>
			<el-tab-pane label="家用电器">家用电器</el-tab-pane>
			<el-tab-pane label="电脑办公">电脑办公</el-tab-pane>
			<el-tab-pane label="玩具乐器">玩具乐器</el-tab-pane>
			<el-tab-pane label="家具厨具">家具厨具</el-tab-pane>
			<el-tab-pane label="家居家装">家居家装</el-tab-pane>
			<el-tab-pane label="内衣配饰">内衣配饰</el-tab-pane>
			<el-tab-pane label="男装">男装</el-tab-pane>
			<el-tab-pane label="男鞋">男鞋</el-tab-pane>
			<el-tab-pane label="女鞋">女鞋</el-tab-pane>
			<el-tab-pane label="美妆服饰">美妆服饰</el-tab-pane>
			<el-tab-pane label="医药保健">医药保健</el-tab-pane>
			<el-tab-pane label="酒水饮料">酒水饮料</el-tab-pane>
			<el-tab-pane label="运动户外">运动户外</el-tab-pane>
		</el-tabs>
	</div>
	</div>
	</div>
</template>

<script>
	import back from "../profile/back.vue"
	import searchbar from "../home/searchbar/searchbar.vue"
	export default {
		name: 'cart',
		components: {
			back,
			searchbar
		},
		data() {
			return {
				tabPosition: 'left',
				items: [{
						url: '#',
						link: require("../../assets/img/tabbar/ic1.jpg"),
						message: '空调',
					}, {
						url: '#',
						link: require("../../assets/img/tabbar/ic2.jpg"),
						message: '冰箱',
					}, {
						url: '#',
						link: require("../../assets/img/tabbar/ic32.jpg"),
						message: '电脑',
					},
					{
						url: '#',
						link: require("../../assets/img/tabbar/ic4.jpg"),
						message: '手机',
					}, {
						url: '#',
						link: require("../../assets/img/tabbar/ic5.jpg"),
						message: '全面屏手机',
					}, {
						url: '#',
						link: require("../../assets/img/tabbar/ic6.jpg"),
						message: '保健品',
					},
				],
				arrays: [
						{
							url: '#',
							link: require("../../assets/img/tabbar/mi1.png"),
							message: '小米',
						}, {
							url: '#',
							link: require("../../assets/img/tabbar/mi2.png"),
							message: '华为',
						}, {
							url: '#',
							link: require("../../assets/img/tabbar/mi3.png"),
							message: '荣耀',
						},
						{
							url: '#',
							link: require("../../assets/img/tabbar/mi4.png"),
							message: 'iphone',
						}, {
							url: '#',
							link: require("../../assets/img/tabbar/mi5.png"),
							message: 'vivo',
						}, {
							url: '#',
							link: require("../../assets/img/tabbar/mi6.png"),
							message: 'OPPO',
						},
				],
					
			};
		}
	}
</script>

<style scoped>
	#cart {
		display: flex;
	}

	.cart-ul {
		/* display: flex; */
		width: 13.4375rem;
		float: left;
	}

	.cart-ul li {
		list-style: none;
		margin-left: 0.6875rem;
		display: inline-block;
	}

	/* 	.cart-left {
		position: absolute;
		top: 3.125rem;
		width: 5.375rem;
		height: 29.6875rem;
		background-color: #F8F8F8;
		text-align: center;
		overflow: hidden;
	}
	.cart-right {
		width: px;
	} */
	.cart-tabs {
		position: absolute;
		top: 3.125rem;
		height: 29.6875rem;
		background-color: #F8F8F8;
		overflow: hidden;
	}

	.is-left span {
		margin-left: 0rem;
	}

	>>>.cart-tabs {
		height: 25rem;
	}

	>>>.el-tabs__content {
		width: 215px;
	}

	.cart-ul img {
		display: block;
		width: 3.75rem;
		height: 3.75rem;
	}

	.el-tab-pane {
		/* height: 29.25rem; */
		margin: 0rem;
	}
	.cart-ul a {
		text-decoration: none;
		font-size: 0.625rem;
		color: #00193A;
		text-align: center;
	}
</style>
