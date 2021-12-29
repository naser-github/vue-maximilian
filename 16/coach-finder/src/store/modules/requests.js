export default {
  namespaced: true,
  state() {
    return { requests: [] };
  },
  actions: {
    async addRequest(context, payload) {
      const newRequest = {
        // id: new Date().toDateString(),
        userEmail: payload.email,
        userMessage: payload.message,
      };

      const contactRequest = await fetch(
        `https://coach-find-2ebf5-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: "Post",
          body: JSON.stringify(newRequest),
        }
      );

      const responseData = await contactRequest.json();

      if (!contactRequest.ok) {
        const error = new Error(
          responseData.message || "failed to send request"
        );
        throw error;
      }

      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;

      context.commit("addRequest", newRequest);
    },

    async fetchRequests(context) {
      const coachId = context.rootGetters.getUserId;
      const token = context.rootGetters.getToken;
      console.log("coachId",coachId);
      console.log("token",token);
      const response = await fetch(
        `https://coach-find-2ebf5-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=`+token
      );
      
      const responseData = await response.json();

      // console.log('response');
      // console.log(response);
      console.log(responseData);

      if (!response.ok) {
        const error = new Error(
          responseData.message || "failed to send request"
        );
        throw error;
      }

      const requests = [];

      for (const res in responseData) {
        
        const request = {
          id: res,
          coachId: coachId,
          userEmail: responseData[res].userEmail,
          userMessage: responseData[res].userMessage,
        };
        requests.push(request);
      }
      context.commit("setRequest",requests);
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
    
    setRequest(state, payload) {
      state.requests = payload;
    },

  },
};
