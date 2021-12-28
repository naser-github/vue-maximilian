export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
      lastFetch: null,
      coaches: [],
    };
  },
  actions: {
    async registerCoach(context, data) {
      let count = context.getters["getCounter"] + 1;
      const userId = context.rootGetters.getUserId;
      // const userId = 4;
      const coachData = {
        id: count,
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.description,
        hourlyRate: data.rate,
      };

      const response = await fetch(
        `https://coach-find-2ebf5-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        {
          method: "Put",
          body: JSON.stringify(coachData),
        }
      );

      // const responseData = await response.json();

      if (!response.ok) {
        console.log("error");
      }

      context.commit("registerCoach", coachData);
      context.commit("increaseCount", count);
    },

    async loadCoaches(context, payload) {
      if(!payload.forcedRefresh && !context.getters.shouldUpdate){
        return;
      }
      const data = await fetch(
        `https://coach-find-2ebf5-default-rtdb.firebaseio.com/coaches.json`
      );

      if (!data.ok) {
        const error = new Error(data.message || "Failed to fetch coach data");
        console.log(error);
        throw error;
      }

      const responseData = await data.json();
      const coaches = [];

      for (const key in responseData) {
        if (responseData[key]) {
          const coach = {
            id: responseData[key].id,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            description: responseData[key].description,
            hourlyRate: responseData[key].hourlyRate,
            areas: responseData[key].areas,
          };
          coaches.push(coach);
        }
      }
      context.commit("setCoaches", coaches);
      context.commit("setFetchTimestamp");
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },

    coachExist(state) {
      return state.coaches && state.coaches.length > 0;
    },

    coachList(state) {
      return state.coaches;
    },

    shouldUpdate(state) {
      const lastFetchTime = state.lastFetch;
      if (!lastFetchTime) {
        return true;
      }
      const currentTime = new Date().getTime();
      return (currentTime - lastFetchTime) / 1000 > 60;
    },
  },
  mutations: {
    increaseCount(state, payload) {
      state.counter = payload;
    },
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },

    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    },
  },
};
