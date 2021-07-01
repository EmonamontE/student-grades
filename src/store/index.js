import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchedValueForClass10A: '',
    searchedValueForClass10B: ''
  },

  mutations: {
    changeSearchedValueForClass10A (state, payload) {
      state.searchedValueForClass10A = payload
    },

    changeSearchedValueForClass10B (state, payload) {
      state.searchedValueForClass10B = payload
    }
  },

  getters: {
    curentSearchedValueForClass10A: state => {
      return state.searchedValueForClass10A
    },

    curentSearchedValueForClass10B: state => {
      return state.searchedValueForClass10B
    }
  }
})
