<template>
	<div id="use">
		<div class="profile-top">
		<back></back>
		<div class="myjd">我的京东</div>
		<stillmore></stillmore>	
		</div>
		<profileuser></profileuser>
		<payfor></payfor>
		<mycell></mycell>
		<service></service>
	</div>
	
</template>

<script>
	import back from "./back.vue"
	import stillmore from "./stillmore.vue"
	import profileuser from "./profileuser.vue"
	import payfor from  "./payfor.vue"
	import mycell from "./mycell.vue"
	import service from "./service.vue"
	export default {
		name: 'profile',
		components: {
			back,
			stillmore,
			profileuser,
			payfor,
			mycell,
			service
		}
	}
</script>

<style scoped>
	#use {
		margin: 0rem;
		padding: 0rem;
		background-color:#F7F7F7 ;
	}
	.myjd{
		display: inline-block;
		    height: 44px;
		    line-height: 44px;
		    font-size: 14px;
		    color: #333;
		    text-align: center;
		    -webkit-box-flex: 1;
		    -webkit-flex: 1;
		    flex: 1;
		    min-width: 0;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
	}
	/* 头部的样式 */
	.profile-top {
		display: flex;
		 justify-content:space-between;
		 position: relative;
	}

</style>
<style>
	
</style>