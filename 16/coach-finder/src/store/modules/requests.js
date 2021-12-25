export default {
  namespaced: true,
  state() {
    return { requests: [] };
  },
  actions: {
    addRequest(context, payload) {
      const newRequest = {
        id: new Date().toDateString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message,
      };
      context.commit("addRequest", newRequest);
    },
  },
  getters: {
    reqExist(_, getters) {
      if (getters.showRequests && getters.showRequests.length > 0) return true;
      else return false;
    },
    // state, getters, rootState, rootGetters
    showRequests(state, _, _2, rootGetters) {
      const userId = rootGetters.getUserId;
      return state.requests.filter((req) => req.coachId == userId);
    },
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
};
