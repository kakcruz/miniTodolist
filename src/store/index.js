import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todo: [],
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    getTodos({commit}){
     return new Promise((resolve) =>{
      setTimeout (() =>{
        return axios.get('http://localhost:3000/todos')
        .then((response)=>{
          commit('storeTodos', response.data)
          resolve()
        })
      },3000)
     })
    }
  },
  getters: {},

  modules: {},
});
