import Vue from 'vue'
// import router from './App'
import Router from 'vue-router'
// import home from '../components/home'
// import homeNews from '../components/homeNews'
// import homeMessage from '../components/homeMessage'
// import about from '../components/about'
// import user from '../components/user'
import VueRouter from 'vue-router'

// 路由懒加载
const home = () => import('../components/home')
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')
const about = () => import('../components/about')
const user = () => import('../components/user')

Vue.use(Router)

export default new Router({
  // 将默认的hash转变成pushState 没错我失败了
  mode: 'history',
  routes: [
    {
      path: '',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '',
          component: homeNews
        },
        {
          path: 'news',//不可以加/
          component: homeNews
        },
        {
          path: 'message',
          component: homeMessage
        }
      ]
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/user/:userId',
      component: user
    }
  ]
})

// const router = new VueRouter({
//   routers,
//   linkActiveClass: 'active'
// })

// export default router
