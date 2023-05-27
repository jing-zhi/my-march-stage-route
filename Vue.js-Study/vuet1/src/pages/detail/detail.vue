<template>
	<div class="detail" >
		<div class="top_bar">
			<back></back>
			<div class="car" v-on:sendMsg="getMsg(data)">
				<strong>购物车详情页</strong>
			</div>
			<stillmore></stillmore>
		</div>
		<imglist  ></imglist>
		<store></store>
	</div>
</template>

<script>
	import back from "../profile/back.vue"
	import stillmore from "../profile/stillmore.vue"
	import imglist from "./imglist.vue"
	import store from "./store.vue"
	export default {
		name: "detail",
		data() {
			return {
				obj: {} ,
			}
		},

		components: {
			back,
			stillmore,
			imglist,
			store
		},
		// 父组件接收子组件
		methods:{
			getMsg(data){
				this.obj = data;
				console.log("我想要接收文件")
				console.log(this.obj)
			}
		}
	}
</script>

<style scoped>
	.detail {
		z-index: 2;
		background-color: #F2F2F2;
	}
.top_bar {
	display: flex;
	background-color: white;
	justify-content: space-between;
}
	.car {
		margin-top: 0.5rem;
	}

	.back {
		margin-top: 0px;
		margin-left: 0px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: #cfbbbb;
		text-align: center;
	}

	>>>.back img {
		margin: 0rem;
		position: relative;
		display: block;
		top: 21%;
		left: 1px;
	}

	>>>.el-dropdown {
		text-align: center;
	}

	>>>.el-dropdown span {
		position: relative;
		left: 0.2rem;
	}

	.el-dropdown {
		width: 30px;
		height: 30px;
		background-color: #cfbbbb;
		border-radius: 50%;
	}
</style>
<style>

</style>
