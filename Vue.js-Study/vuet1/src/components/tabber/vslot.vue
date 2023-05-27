<template>
	<div id="v-slot">
		<TabBar>
			<TabBaritem path="/home" activeColor="blue">
				<template v-slot:img-gray>
					<img src="../../assets/img/tabbar/京.png">
				</template>
				<template v-slot:img-ictive>
					<img src="../../assets/img/tabbar/京东.png">
				</template>
				<template v-slot:item-icon>
					<span>首页</span>
				</template>
			</TabBaritem>
			<TabBaritem path="/cart">
				<template v-slot:img-gray>
					<img src="../../assets/img/tabbar/分.png">
				</template>
				<template v-slot:img-ictive>
					<img src="../../assets/img/tabbar/分类.png">
				</template>
				<template v-slot:item-icon>
					<span>分类</span>
				</template>
			</TabBaritem>
			<TabBaritem path="/category">
				<template v-slot:img-gray>
					<img src="../../assets/img/tabbar/购物.png">
				</template>
				<template v-slot:img-ictive>
					<img src="../../assets/img/tabbar/购物车空.png">
				</template>
				<template v-slot:item-icon>
					<span>购物车</span>
				</template>
			</TabBaritem>
			<TabBaritem path="/profile">
				<template v-slot:img-gray>
					<img src="../../assets/img/tabbar/用.png">
				</template>
				<template v-slot:img-ictive>
					<img src="../../assets/img/tabbar/我的.png">
				</template>
				<template v-slot:item-icon>
					<span>我的</span>
				</template>
			</TabBaritem>
		</TabBar>
	</div>
</template>

<script>
	import TabBar from "./TabBar.vue"
	import TabBaritem from "./TabBaritem.vue"
	export default {
		name: "vslot",
		components: {
			TabBar,
			TabBaritem,
		}
	}
</script>

<style scoped>
#v-slot {
	z-index: 1;
}
</style>
