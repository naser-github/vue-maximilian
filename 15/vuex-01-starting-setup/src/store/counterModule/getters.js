export default {
  showCounter(state) {
    return state.counter * 2;
  },
  normalizeGetter(_, getters) {
    const finalVal = getters.showCounter;
    if (finalVal < 0) return 0;
    if (finalVal > 100) return 100;
    return finalVal;
  },
};
