import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

/*
* 前置全局路由守卫
* 如果访问的页面是login直接放行，如果是其他页面就判断login是否为null 真的为null的话我们需要返回到登陆界面
*  */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    const loginToken = window.sessionStorage.getItem(Vue.prototype.$constant.TOKEN_NAME)
    if (!loginToken) {
      next('/login')
    }
    next()
  }
})

export default router
