import { createStore } from 'vuex';

import rootActions from './actions.js';
import rootGetters from './getters.js';
import rootMutations from './mutations.js';

import productModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productModule,
    cart: cartModule,
  },
  store() {
    return {
      isLoggedIn: false,
    };
  },
  actions: rootActions,
  getters: rootGetters,
  mutations: rootMutations,
});

export default store;
