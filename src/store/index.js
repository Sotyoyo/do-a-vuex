import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vue2',
  },
  getters: {
    withVersion(state) {
      let versionNo = state.name === 'vue2' ? '2.6' : '3.0.beta'
      return state.name + versionNo
    },
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload
    },
  },
  actions: {
    asyncChangeName({ commit }, payload) {
      setTimeout(() => {
        commit('changeName', payload)
      }, 1000)
    },
  },
})
