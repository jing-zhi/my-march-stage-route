import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
import category from '../pages/category/category.vue'
import profile from '../pages/profile/profile.vue'
import cart from '../pages/cart/cart.vue'
import detail from '../pages/detail/detail.vue'
//连接的是跳转的页面 
Vue.use(VueRouter)


const routes = [
	{
		path:'/',
		//rediect 重定向 时默认是home页面
		redirect:'/home',
		//定向到第一个页面
	},
	{
		path:'/home',
		name:'home',
		component:home
	},
	{
		path:'/cart',
		name:'cart',
		component:cart
	},
	{
		path:'/category',
		name:'category',
		component:category
	},
	{
		path:'/profile',
		name:'profile',
		component:profile
	},
	{
		path:'/detail',
		name:'detail',
		component:detail
	},
]

const router = new VueRouter({
	routes
})

export default router
