<template>
	<div class="search-bar">
		<div class="jd-icon">
			<img class="JD" src="../../../assets/img/tabbar/京东11.png">
		</div>
		<!-- 后面加上一个After 之后 加上一个丨 -->
		<!-- <div class="search-icon">

		</div> -->
		<i class="search-icon"> <img src="../../../assets/img/tabbar/搜索.png" ></i>
		<!-- 这个是 搜索的icon -->
		<div class="search-bar-bar"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
		<!-- 搜索框 -->
	</div>
</template>

<script>
	export default {
		name: "searchbar",
		data() {
			return {
				input:''
			}
		}
	}
</script>

<style scoped>
	.search-bar {
		position: relative;
		display: inline-block;
		margin-top: 0.5rem;
		flex-direction: inherit;
		width: 13.625rem;
		height: 2rem;
		 background: #f7f7f7;
		border-radius: 3.3125rem;
	}
.jd-icon{
	display: inline-block;
}
	.JD {
		position: relative;
		left: 8px;
		top: -4px;
		margin: 0rem;
		padding: 0rem;
		width: 1.5rem;
		height: 1.5rem;
	}
	.jd-icon::after {
		 content: "";
		 position: relative;
		    border-right: 2px solid #d7d7d7;
		    top: -5px;
		    left: 7px;
		    height: 16px;
	}
	.search-icon {
		display: inline-block;
		position: relative;
		    top: 1px;
		    left: 16px;
	}
	.search-bar-bar {
		display: inline-block;
		    width: 60%;
		    border: none;
		    height: 30px;
		    overflow: hidden;
		    background: #f7f7f7;
		    font-size: 12px;
		    -webkit-box-align: center;
		    line-height: 30px;
		    position: absolute;
		    top: 0;
		    left: 73px;
		    padding-left: 35px;
		    padding-right: 10px;
		    box-sizing: border-box;
	}
	.search-bar-bar input{
		border: 0;
		    background: 0 0;
		    font-size: 15px;
		    color: #232326;
		    padding-left: 5px;
		    width: 19em;
		    box-sizing: border-box;
		    -webkit-box-flex: 1;
		    height: auto;
		    margin: 0 0 0 -20px;
		    vertical-align: middle;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    width: 100%;
		    line-height: 16px;
	}
</style>
