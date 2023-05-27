import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/state.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import index from './store/index.js'

Vue.config.productionTip = false

Vue.use(ElementUI);
// vue.use(Vuex);

new Vue({
el:'#app',
  router,
  store,
  // components:{
	 //  App
  // },
  render: function (h) { return h(App) }
}).$mount('#app')
// const store = new Vuex.Store({
// 	state:{
// 		count: 0
// 	},
// 	mutations:{
// 		increment
// 	}
// }),