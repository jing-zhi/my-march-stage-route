<template>
	<div class="floor">
		<div class="sec_kill_floor">
			<div class="title_wrap">
				<div class="is-left"><span>京东秒杀</span> <span class="seckill-nth">14</span> </div>
				<div class="timeout">
					<div class="timeout_h ho">00</div>
					<span class="spann">:</span>
					<div class="timeout_h mo">00</div>
					<span class="spann">:</span>
					<div class="timeout_h so">00</div>
				</div>
				<a href="#" class="is-right">更多秒杀<i class="seckill-more-icon"></i></a>
			</div>
			
				<div class="demo-image">
				  <li class="block" v-for="fit in fits" :key="fit.index">				  
				 
					  <img :src="fit.url" >
					    <span class="demonstration up" >{{ fit.message }}</span>
						<span class="demonstration down" >{{ fit.messages }} <hr></span>
						<img src="../../../assets/img/tabbar/book1.jpg" >
				  </li>
				<!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "floor",
		  data() {
		      return {
		        fits: [{
					url:require('../../../assets/img/tabbar/book1.jpg'),
					message:'¥9', 
					messages:'¥199',
				},
				{
					url:require('../../../assets/img/tabbar/book2.jpg'),
					message:'¥19', 
					messages:'¥169',
				},
				{
					url:require('../../../assets/img/tabbar/book3.jpg'),
					message:'¥29', 
					messages:'¥250',
				},{
					url:require('../../../assets/img/tabbar/book4.jpg'),
					message:'¥39', 
					messages:'¥360',
				},
				{
					url:require('../../../assets/img/tabbar/book5.jpg'),
					message:'¥49', 
					messages:'¥280',
				},
				{
					url:require('../../../assets/img/tabbar/book6.jpg'),
					message:'¥59', 
					messages:'¥540',
				},
				],
		        
		      }
		    }
	}
</script>

<style >
	.floor {
		position: relative;
		width: 100%;
		height: 7.5rem;
		text-align: center;
		cursor: pointer;
		top: 54px;
	}

	.sec_kill_floor {
		position: absolute;
		display: block;
		height: 100%;
		width: 19.375rem;
		border-radius: 0.5rem;
		left: 0.3125rem;
		margin: auto;
		background-color: white;
		overflow: hidden;
	}

	.title_wrap {
		width: 100%;
		height: 1.875rem;
		background-image: url(../../../assets/img/tabbar/下载.png);
		background-repeat: no-repeat;
		background-size: 320px 30px;
	}

	.is-left span {
		float: left;
		font-size: .7rem;
		margin-left: 0.75rem;
		margin-top: 0.3125rem;
		color: #333;
		letter-spacing: 0;
		line-height: 1.2;
	}


	.seckill-nth {
		height: 100%;
		border-radius: .4rem;
		font-size: .65rem;
		color: #ff2727;
		letter-spacing: 0;
		padding-right: .25rem;
		padding-left: .25rem;
		float: left;
		position: relative;
		left: -1px;
		margin-right: .2rem;
	}

	.seckill-nth::after {
		height: .875rem;
		width: 1.025rem;
		content: "";
		display: inline-block;
		vertical-align: middle;
		background-image: url(../../../assets/img/tabbar/seckill-time-to_1de70c91.png);
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: contain;
	}

	.timeout {
		margin-right: .2rem;
		height: 100%;
		margin-top: 0.125rem;
		/* float: right; */
	}

	.timeout_h {
		display: inline-block;
		float: left;
		color: #fff;
		background-image: -webkit-linear-gradient(230deg, #ff6152, #fa2c19);
		background-image: linear-gradient(-140deg, #ff6152, #fa2c19);
		background-color: #fa2c19;
		border-radius: .2rem;
		text-align: center;
		font-weight: 400;
	}

	.timeout_h {
		height: 80%;
		font-size: 1rem;
	}

	.spann {
		float: left;
		display: inline-block;
		height: 100%;
		line-height: 1.4;
		font-size: .6rem;
		text-align: center;
		font-family: PingFangSC-Regular;
		color: #f2270c;
		letter-spacing: 0;
		font-weight: 700;
	}

	.is-right {
		/* float: right; */
		/* display: inline-block; */
		color: #f23030;
		top: -27px;
		float: right;
		text-decoration: none;
		font-size: .6rem;
		text-align: right;
		position: relative;
		padding-right: 1.1rem;
	}

	.seckill-more-icon {
		display: inline-block;
		width: .55rem;
		height: .55rem;
		background: url(../../../assets/img/tabbar/arrow_rt_2ccb8cd5.png) no-repeat;
		background-size: cover;
		position: absolute;
		right: .4rem;
		top: .3rem;
	}


.demo-image{
	display: flex;
}
.block{
	flex: 4;
	margin-left: 1px;
	list-style: none;
}
.demonstration{
	display: block;
}
.block img {
	width: 50px;
	height: 3.125rem;
}
.up {
	font-family: JDZhengHT-EN-Regular;
	margin-top: .2rem;
	display: block;
	color: #f2270c;
	font-size: .65rem;
	line-height: .6rem;
	height: .6rem;
	text-align: center;
}
.down {
	/* color: #999; */
	font-size: .6rem;
	line-height: .6rem;
	margin: .2rem 0 .55rem;
	text-align: center;
	padding: 0 .1rem;
	display: inline-block;
	position: relative;
}
.down hr{ 
	    position: absolute;
	    left: 0;
	    top: .3rem;
	    width: 200%;
	    height: 1px;
	    background-color: #999;
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    -webkit-transform-origin: left top;
	    transform-origin: left top;
	    overflow: hidden;
	    box-sizing: border-box;
	    border: 0;
}
</style>
