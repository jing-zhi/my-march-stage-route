<template>
	<el-dropdown>
	  <span class="el-dropdown-link">
	    <img src="../../assets/img/tabbar/MORE.png" >
	  </span>
	  <el-dropdown-menu slot="dropdown">
	    <el-dropdown-item>1</el-dropdown-item>
	    <el-dropdown-item>2</el-dropdown-item>
	    <el-dropdown-item>3</el-dropdown-item>
	    <el-dropdown-item disabled>4</el-dropdown-item>
	    <el-dropdown-item divided>5</el-dropdown-item>
	  </el-dropdown-menu>
	</el-dropdown>
	
	
</template>

<script>

	export default {
		name:"stillmore" ,
	}
	
</script>

<style scoped>
	.stillmore{
		margin: 0rem;
	}
	.el-dropdown-link {
	  cursor: pointer;
	  color: #409EFF;
	}
	.el-icon-arrow-down {
	  font-size: 12px;
	}
	.el-dropdown-link img {
		width: 1.5rem;
		margin-right: 1rem;
		margin-top: 1rem;
	}
</style>
