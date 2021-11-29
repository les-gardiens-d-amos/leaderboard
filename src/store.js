import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalStats: null,
    locations: null
  },
  mutations: {
    globalStats: (state, stats) => {
      state.globalStats = stats;
    },
    locations: (state, location) => {
      state.locations = location;
    }
  },
  actions: {
  },
  modules: {
  }
})
