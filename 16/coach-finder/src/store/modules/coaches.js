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
    registerCoach(context, data) {
      let count = context.getters["getCounter"]+1;
      
      const coachData = {
        id: count,
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.description,
        hourlyRate: data.rate,
      };

      context.commit("registerCoach", coachData);
      context.commit("increaseCount", count);
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
  },
};
