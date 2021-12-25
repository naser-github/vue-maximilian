export default {
  namespaced: true,
  state() {
    return {
      counter: 2,
      coaches: [
        {
          id: "1",
          firstName: "Latif",
          lastName: "Kabir",
          areas: ["frontend", "backend", "devOps"],
          description:
            "I'm Latif & I've worked as a developer for years. Let me help you become a developer as well!",
          hourlyRate: 60,
        },
        {
          id: "2",
          firstName: "Protap",
          lastName: "Saha",
          areas: ["backend", "devOps"],
          description:
            "I am Protap & I've worked as a developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
      ],
    };
  },
  actions: {
    async registerCoach(context, data) {
      let count = context.getters["getCounter"] + 1;
      const userId = context.rootGetters.getUserId;
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
        console.log("updated");
      }

      context.commit("registerCoach", coachData);
      context.commit("increaseCount", count);
    },

    async loadCoaches(context) {
      const data = await fetch(
        `https://coach-find-2ebf5-default-rtdb.firebaseio.com/coaches.json`
      );

      if (!data.ok) {
        const error = new Error(responseData.message || "Failed to fetch");
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
  },
  mutations: {
    increaseCount(state, payload) {
      state.counter = payload;
    },
    registerCoach(state, payload) {
      console.log(payload);
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
  },
};
