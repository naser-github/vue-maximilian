import { createStore } from "vuex";

import coaches from "./modules/coaches.js";
import requests from "./modules/requests.js";

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
  },
  state() {
    return {
      userId: 1,
    };
  },
  actions: {},
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
  mutations: {},
});

export default store;
