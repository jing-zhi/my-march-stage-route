<template>
	<div class="search">
		<div class="background"></div>
		<div class="top-search ">
			<sort></sort>
			<searchbar></searchbar>
			<user></user>
		</div>
		<div id="slideshow">
			<Swiper>
				<SwiperItem v-for="(item, index) in arr" :key="index">
					<a :href="item.link">
						<img :src="item.image" />
					</a>
				</SwiperItem>
			</Swiper>
		</div>
		<im></im>
		<slidemove>
		</slidemove>
		<floor></floor>
		<homelast></homelast>
		<revolve></revolve>
	</div>
	
</template>

<script>
	import sort from "./sort/sort.vue"
	import searchbar from "./searchbar/searchbar.vue"
	import User from "./User/User.vue"
	import Swiper from "./slideshow/Swiper.vue"
	import SwiperItem from "./slideshow/SwiperItem.vue"
	import im from "./imgs/im.vue"
	import slidemove from "./slidemove/slidemove.vue"
	import floor from "./miaosha/floor.vue"
	import homelast from "./homelast/homelast.vue"
	import revolve from "./revolve.vue"
	export default {
		name: 'home',
		components: {
			sort,
			searchbar,
			User,
			Swiper,
			SwiperItem,
			im,
			slidemove,
			floor,
			homelast,
			revolve,
		},
		data() {
			return {
				arr: [{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/1.jpg'),
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/2.jpg'),
					}, {
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/3.jpg'),
					}, {
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/5.jpg'),
					}, {
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/6.jpg'),
					}, {
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/8.jpg'),
					},
					{
						link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
						image: require('../../assets/img/tabbar/9.jpg'),
					},
				]
			}
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/base.css");

	.search {
		margin: 0rem;
		padding: 0rem;
		background-color:#F6F6F6 ;
	}

	.top-search {
		display: flex;
		position: fixed;
		width: 100%;
		height: 2.75rem;
		z-index: 999;
		background-color: #E43130;
		justify-content: space-between;
	}

	.background {
	position: absolute;
	    width: 100%;
	    height: 15.75rem;
	    background-color: #5DC0DF;
	    z-index: 0;
	}
	#slideshow {
		position: relative;
		top: 3.125rem;
	}
</style>
