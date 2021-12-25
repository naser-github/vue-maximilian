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
    showRequests(state) {
      state.requests;
    },
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
};
