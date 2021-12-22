import { createStore } from 'vuex';

import rootActions from './actions.js';
import rootGetters from './getters.js';
import rootMutations from './mutations.js';

import counterModule from './counterModule/index.js';

const store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },

  getters: rootGetters,

  mutations: rootMutations,

  actions: rootActions,
});

export default store;