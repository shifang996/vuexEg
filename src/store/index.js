import Vue from 'vue'
import Vuex from 'vuex'
import user from './moudles/user'
import goods from './moudles/goods'
import order from './moudles/order'

import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1: {
      name: "lier",
      age: 22,
      height: 1.77
    },
    habbit: {
      play: "乒乓球",
      read: "三国演义"
    }
  },
  getters: {
    infomationConnect(state) {
      return `姓名是${state.user1.name},今年是${state.user1.age},身高是${state.user1.height.toFixed(2)}CM,喜欢${state.habbit.play},喜欢阅读${state.habbit.read}`
    }
  },
  mutations: {
    addNumber(state) {
      state.user1.age += 1;
      state.user1.height += 0.1;
    },
    reduceNumber(state) {
      state.user1.age -= 1;
      state.user1.height -= 0.1;
    }
  },
  actions: {
    otherDataLog() {
      return axios.get("http://47.92.50.43:8888/sys/jslist")
    }
  },
  modules: {
    user,
    goods,
    order
  }
})