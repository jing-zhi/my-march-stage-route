<template>
	<div class="profile-user">
		<div class="profile-user-first">
			<div class="avatar">
				<img src="../../assets/img/tabbar/jey.jpg">
			</div>
			<div class="a-sp">
				<span class="aspone">jd_5f1542076bdca
					<div class="pr-before"></div>
					<!-- 插入东西 -->
				</span>
				<span class="a-sptwo">
					京享值
					<!-- 需要加一个背景-->
				</span>
			</div>
			<div class="setup"><img src="../../assets/img/tabbar/4f25fadf9ebe91d3.png"></div>
		</div>
		<div class="profile-user-second">
			<div class="wait">
				<div>0</div>
				<span>商品收藏</span>
			</div>
			<div class="wait">
				<div>1</div>
				<span>店铺收藏</span>
			</div>
			<div class="wait">
				<div>3</div>
				<span>我的足迹</span>
			</div>
		</div>
		<div class="profile-user-last">
			<div class="plus">
				<div class="plus-left">免费试用 立领一张运费险</div>
				<div class="plus-middle">0元试用</div>
				<div class="plus-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "profileuser"
	}
</script>

<style scoped>
	.profile-user {
		position: relative;
		overflow: hidden;
		width: 100%;
		background-image: url(../../assets/img/tabbar/backimg.png);
		background-size: cover;
	}

	.profile-user-first {
		position: relative;
		display: flex;
		top: .85rem;
		width: 100%;
		margin-left: 12px;
	}

	.profile-user-second {
		position: relative;
		display: flex;
		justify-content: space-around;
		text-align: center;
		flex: 3;
		width: 100%;
		height: 4.5rem;
		top: 2rem;
		margin-top: .3125rem;
	}

	.profile-user-last {
		width: 18rem;
		height: 52px;
		margin: 15px auto 0;
		box-sizing: border-box;
		color: #ffe678;
		font-size: 12px;
	}

	.plus {
		width: 100%;
		height: 2.625rem;
		background-size: cover;
		background-image: url(../../assets/img/tabbar/8a736742745d79cf.png);
	}

	.avatar {
		overflow: hidden;
		border-radius: 50%;
		border: 1px solid white;
		width: 3.125rem;
		height: 3.125rem;
		margin-left: 0.25rem;
	}

	.avatar img {
		width: 3.125rem;
		height: 3.125rem;
	}

	.a-sp {
		margin-left: 11px;
	}

	.aspone {
		font-size: 18px;
		color: #fff;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		line-height: 1.2;

	}

	/* 雪碧图 */
	.pr-before::before {
		position: absolute;
		width: 15px;
		height: 15px;
		top: 4px;
		right: 77px;
		background: url(../../assets/img/tabbar/liicon.png) no-repeat scroll 0 0/cover;
		content: "";
	}

	.a-sptwo {
		display: block;
	}

	.setup {
		margin-left: 52px;
	}

	.setup img {
		position: relative;
		width: 1.25rem;
		height: 1.25rem;
		margin-top: 0.3125rem;
		/* margin-left: 5rem; */
	}
	.a-sptwo{
		text-align: center;
		font-size: 10px;
		color: white;
		border-radius: 0.65rem;
		margin-top: 0.5rem;
		margin-left: 0.3125rem;
		width: 52px;
		height: 16px;
		background-color: #D51941;
	}
	.wait div {
		color: white;
		font-size: 1rem;
		font-family: -apple-system,Helvetica,sans-serif;
	}
	.wait span {
		font-size:  0.75rem;
		color: white;
	}
	.plus {
		display: flex;
		justify-content: space-around;
		text-align: center;
		vertical-align: middle;
}
	.plus div {
/* 	width: 3.125rem;
	height: 1.25rem; */
	/* background-color: wheat; */
	margin-left: 0.125rem;
	margin-top: 0.625rem;
}
.plus-left {
	    position: relative;
	    padding-left: 78px;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    flex: 1;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    max-width: 7rem;
}
.plus-left::before {
	position: absolute;
	    content: "";
	    width: 57px;
	    height: 12px;
	    left: 0;
	    top: 3px;
	    background: url(../../assets/img/tabbar/5ae83d09fff874cb.png) no-repeat 50%;
	    background-size: 100% 100%;
}
.plus-left::after {
	    position: absolute;
	    content: "";
	    width: 1px;
	    height: 7px;
	    background: #ffe678;
	    left: 67px;
	    top: 5px;
}
.plus-middle {
	position: relative;
	    border-radius: 9px;
	    background-image: -webkit-linear-gradient(
	140deg,#ffe36f,#f6d44e);
	    background-image: -webkit-linear-gradient(
	140deg, #FFE36F 0%, #F6D44E 100%);
	    background-image: linear-gradient(
	-50deg,#ffe36f,#f6d44e);
	    color: #262626;
	    font-size: 11px;
	    line-height: 18px;
	    text-align: center;
	    padding: 0 10px;
	    -webkit-flex-shrink: 0;
	    flex-shrink: 0;
	    height: 18px;
}
.plus-middle::after {
	content: "";
	    display: inline-block;
	    vertical-align: middle;
	    border-left: 3px solid #262626;
	    border-top: 3px solid transparent;
	    border-bottom: 3px solid transparent;
	    margin-left: 4px;
	    margin-bottom: 2px;
}
</style>
