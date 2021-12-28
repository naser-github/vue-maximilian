import { createStore } from "vuex";

import coaches from "./modules/coaches.js";
import requests from "./modules/requests.js";
import auth from "./modules/auth.js";

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
    auth: auth,
  },
  state() {},
  actions: {},
  getters: {},
  mutations: {},
});

export default store;
