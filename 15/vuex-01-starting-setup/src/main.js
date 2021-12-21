import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },

  getters: {
    showCounter(state) {
      return state.counter * 2;
    },
    normalizeGetter(_, getters) {
      const finalVal = getters.showCounter;
      if (finalVal < 0) return 0;
      if (finalVal > 100) return 100;
      return finalVal;
    },
  },

  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },

  actions: {
      increment(context){
          setTimeout(function(){
              context.commit('increment');
          },2000);
      }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
