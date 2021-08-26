import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios' 
let app = createApp(App)
app.config.globalProperties.$axios = axios 
axios.defaults.baseURL="http://hayes.qicp.vip" 
app.mount('#app')