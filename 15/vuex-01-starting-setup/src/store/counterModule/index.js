import rootActions from './actions.js';
import rootGetters from './getters.js';
import rootMutations from './mutations.js';

export default {
  state() {
    return {
      counter: 0,
    };
  },

  actions: rootActions, 

  getters: rootGetters, 

  mutations: rootMutations, 
};
