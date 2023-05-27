import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' 
// import store from './store'
import Axios from './plugnis/axios'




createApp(App).use(router).use(Axios).mount('#app')


