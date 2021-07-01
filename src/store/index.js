import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchedValueForClass10A: '',
    searchedValueForClass10B: ''
  },

  mutations: {
    changeSearchedValueForClass10A (state, someValue) {
      state.searchedValueForClass10A = someValue
    },

    changeSearchedValueForClass10B (state, someValue) {
      state.searchedValueForClass10B = someValue
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
