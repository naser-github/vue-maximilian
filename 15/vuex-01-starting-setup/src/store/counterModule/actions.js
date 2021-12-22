export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 200);
  },

  increase(context, payload) {
    setTimeout(function () {
      context.commit('increase', payload);
    }, 200);
  },
};
