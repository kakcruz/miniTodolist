import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
