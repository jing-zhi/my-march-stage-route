import Vue from 'vue'
import Vuex from 'vuex'

//1,安装插件
Vue.use(Vuex)

//2,创建对象
const store =new Vuex.Store({
  state: {
    counter: 120
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  },  
})

//3,导出store独享
export default store