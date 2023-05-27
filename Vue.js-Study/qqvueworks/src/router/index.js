// import Vue from 'vue'
import {createRouter, createWebHistory} from "vue-router";
// import VueRouter from 'vue-router'
// import Dynamic from '../views/dynamic'
// 懒加载
// 导入的是文件名字，和name无关
const Message = () => import("../views/message/Message")
const Contacts = () => import("../views/contacts/Contacts")
const Dynamic = () => import("../views/dynamic/Dynamic")
const Friend = () => import('../views/contacts/friend')
const Liao = () => import('../views/contacts/Liao')

const Me = () => import("../views/me/Me")
//1, 安装插件
// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes
// })



// 2,创建路由对象
const routes= [
  // 第一个默认是消息视图
  {
    path: '',
    redirect: '/message'
  },
  {
    path: '/message',
    component:Message,
  },
  {
    path: '/contacts',
    component:Contacts,
  },
  {
    path: '/dynamic',
    component:Dynamic,
  },
  { name: 'ri',
    path: '/contacts.Friend', 
    components: { en: Friend } 
  },
  { name: 'Liaotian',
    path: '/liao', 
    components: { at: Liao } 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 3,导出router
export default router