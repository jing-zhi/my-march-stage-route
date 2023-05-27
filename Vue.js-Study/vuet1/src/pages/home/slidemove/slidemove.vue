<template>
	<div class="slidemove">
		<!-- 这样写的问题非常大 我们需要的是一个div中有许多其他的东西  调整结构是最重要的 -->
		<div id="slidemove-box" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
			<item >
				<a v-for="(item,index) in items" :key="'left'+index" :href="item.link"><img :src="item.imag"><span>{{item.message}}</span></a>
			</item>
			<itemtwo >
				<a v-for="(arr,index) in array" :key="'right'+index" :href="arr.link"><img :src="arr.imag"><span>{{arr.message}}</span></a>
			</itemtwo>
		</div>
	</div>
</template>

<script>
	import item from "./item.vue"
	import itemtwo from "./itemtwo.vue"
	export default {
		name: 'slidemove',
		// props: 'index',
		components: {
			item,
			itemtwo,
		},
		// 这里data做了一个封装 可以防止污染也可以复用// data() {		// 	return ()		// 	items:[{}]
		// 一个是组件里面的写法 一个是vue实例中的写法 

		data: function() {
			return {	
				slideCount: 0,
				interval: 3000,
				imgWidth: 0, //swiper每张图片的宽度一样
				swiperStyle: {}, //利用swiper的style对象来控制着“过渡”
				currentIndex: 1, //记录当前滑动的下标
				scrolling: false, //当用手触摸和移动时,则暂停滚动
				animalDuration: 300, //切换一张图片0.3
				showIndicator: true, //当只有一张图片时，不显示小点点
				moveRatio: 0.25,
				playTimer: null, //控制着计时器的开始与暂停
				moveRatio: 0.25,
				items: [{
					
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go1.png'),
							message: '京东超市'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go2.png'),
							message: '数码电器'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go3.png'),
							message: '京东服饰'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go4.png'),
							message: '京东生鲜'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go5.png'),
							message: '京东到家'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go6.png'),
							message: '充值缴费'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go7.png'),
							message: '9.9元拼'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go8.png'),
							message: '领卷'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go9.png'),
							message: '零金贴'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go10.png'),
							message: 'PLUS会员'
						}
					],
					array: [{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go11.png'),
							message: '京东国际'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go12.png'),
							message: '京东拍卖'
						}, {
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go13.png'),
							message: '看病购药'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go14.png'),
							message: '玩3C'
						}, {
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go15.png'),
							message: '沃尔玛'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go16.png'),
							message: '美妆馆'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go17.png'),
							message: '京东旅行'
						}, {
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go18.png'),
							message: '拍拍二手'
						},
						{
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/go19.png'),
							message: '物流查询'
						}, {
							link: 'https://prodev.m.jd.com/mall/active/2qGT69MYwAo9zEtSmBecnnm47xLr/index.html?__jda=76161171.1624697606226997033046.1624697606.1627997866.1628037349.15',
							imag: require('../../../assets/img/tabbar/cs.jpg'),
							message: '全部'
						},
					]
				
			};
		},
		methods: {
			handleDom: function() {
				let swiperEle = document.querySelector("#slidemove-box");//js代码 获得swiper
				let slideEles = document.getElementsByClassName("#slidemove-box");
				this.slideCount = slideEles.length;
				// console.log(this.slideCount);
				if (this.slideCount > 1) {
					let cloneFirst = slideEles[0].cloneNode(true);
					let cloneLast = slideEles[this.slideCount - 1].cloneNode(true);
					swiperEle.insertBefore(cloneLast, slideEles[0]);
					swiperEle.appendChild(cloneFirst);
					// console.log(slideEles);
					this.imgWidth = swiperEle.offsetWidth;
					this.swiperStyle = swiperEle.style;
				}
				//显示第一张图片（不是刚刚从最后面添加到前面的那张）
				this.setTransform(-this.imgWidth);
			},
		
			startTimer: function() {
				let that = this;
				this.playTimer = setInterval(function() {
					that.currentIndex++;
					that.scrollContent(-that.currentIndex * that.imgWidth); //使用过渡实现移动轮播图，效果更舒适
				}, that.interval);
			},
		
			setTransform: function(movePosition) {
				//控制着轮播图向左右移动
				this.swiperStyle.transform = `translateX(${movePosition}px)`;
				this.swiperStyle["-webkit-transform"] = `translateX(${movePosition}px)`;
				this.swiperStyle["-ms-transform"] = `translateX(${movePosition}px)`;
			},
		
			scrollContent: function(position) {
				this.scrolling = true; //滚动时不能用手滑动图片
				this.swiperStyle.transition = `transform ${this.animalDuration}ms ease`;
				this.setTransform(position);
				this.checkPosition();
				this.scrolling = false;
			},
			checkPosition: function() {
				//在确保“过渡”结束后再检查下标是否合理
		
				let that = this;
				setTimeout(function() {
					that.swiperStyle.transition = "0ms";
					if (that.currentIndex >= that.slideCount + 1) {
						that.currentIndex = 1;
						that.setTransform(-that.currentIndex * that.imgWidth); //当移动到最后一张，直接移动到第一张，不用过渡
					} else if (that.currentIndex <= 0) {
						that.currentIndex = that.slideCount;
						that.setTransform(-that.currentIndex * that.imgWidth);
					}
				}, that.animalDuration);
			},
			touchStart: function(e) {
				//如果图片正在滚动，则不能滑动图片
				if (this.scrolling) return;
				//滑动时，暂停计时器
				this.stopTimer();
				this.startX = e.touches[0].pageX; //记录手指进入屏幕的距离，用于判断划痕的距离判断是否滑动图片
			},
			touchMove: function(e) {
				this.currentX = e.touches[0].pageX;
				this.distance = this.currentX - this.startX;
				let currentPosition = -this.currentIndex * this.imgWidth;
				let moveDistance = this.distance + currentPosition;
				this.setTransform(moveDistance);
			},
			touchEnd: function(e) {
				let endDistance = Math.abs(this.distance); //取绝对值
				let movePercentage = this.imgWidth * this.moveRatio; //当手指滑动到这个距离，则自动跳到下一张图片
				if (this.distance === 0) {
					return;
				} else if (this.distance > 0 && endDistance > movePercentage) {
					//this.distance>0 则说明手指向右滑
					this.currentIndex--;
				} else {
					this.currentIndex++;
				}
				this.scrollContent(-this.currentIndex * this.imgWidth);
				this.startTimer();
			},
			stopTimer: function() {
				clearInterval(this.playTimer);
			}
		},
		mounted: function() {
			//1.操作dom，在前后添加slide
			setTimeout(() => {
				this.handleDom();
				this.startTimer();
			}, 200);
		}
		
	}
</script>

<style>
	.slidemove{
		position: relative;
		width: 320px;
		height: 8.75rem;
		top: 3.125rem;
		overflow: hidden;
	}
	.item{
		position: absolute;
		width: 320px;

	}
	.item a {
			width: 20%;
		    text-align: center;
		    display: block;
		    float: left;
			text-decoration: none;
	}
	.item img{
		width: 34px;
		height: 34px;
		margin: 6px;
	padding: 0px;
	} 
	.item span {
			display: block;
			margin: 0px;
			padding: 0px;
			top: -4px;
			    position: relative;
		    font-size: .6rem;
		    color: #666;
	}
	.item-two {
		position: absolute;
		width: 320px;
		left: 20rem;
	}
	.item-two img{
		width: 50px;
		height: 50px;
	}
	.item-two a {
		width: 20%;
		text-align: center;
		display: block;
		float: left;
		text-decoration: none;
	}
	.item-two  span{
		display: block;
		font-size: .6rem;
		color: #666;
	}
	#slidemove-box{
		width: 640px;
		height: 140px;
	}
</style>
