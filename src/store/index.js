import Vue from 'vue'
import Vuex from 'vuex'
import { MUTATION_SET_LOGIN_TOKEN, TOKEN_NAME } from '../common/GlobalConstants'

Vue.use(Vuex)
/* 官方给的定义 修改一个store 必须 action -->mutations -->state -->VueComponent   */
export default new Vuex.Store({
  /* 放的是全局共享的变量 */
  state: {
    login_token: window.sessionStorage.getItem(TOKEN_NAME) ? window.sessionStorage.getItem(TOKEN_NAME) : ''
  },
  /* 方法集合定义 this.$store.commit('setLoginToken',param) */
  mutations: {
    [MUTATION_SET_LOGIN_TOKEN] (state, token) {
      state.login_token = token
      window.sessionStorage.setItem(TOKEN_NAME, token)
    }
  },
  actions: {},
  /* this.$store.getters.getLoginToken */
  getters: {
    /* gte方法获取登录的token */
    getLoginToken (state) {
      return state.login_token
    }
  },
  modules: {
  }
})
