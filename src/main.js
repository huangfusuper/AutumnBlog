import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import Urls from './common/Urls'
import Constants from './common/GlobalConstants'

Vue.prototype.$urls = Urls
Vue.prototype.$constant = Constants

axios.defaults.baseURL = Urls.BASE_URL

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers = {
    autumnLoginToken: store.getters.getLoginToken
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  const data = response.data
  if (data.code !== Constants.SUCCESS_CODE) {
    Vue.prototype.$message.error(data.msg)
  }
  // 对响应数据做点什么
  return response
}, function (error) {
  const response = error.response
  console.log(response.status)
  if (response.status === 401) {
    router.push('/login').then(() => {
      window.sessionStorage.removeItem(Constants.TOKEN_NAME)
    })
    Vue.prototype.$message.error('登录过期，请重新登录')
  } else {
    Vue.prototype.$message.error('服务器正在维护中，请稍后再试！')
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
