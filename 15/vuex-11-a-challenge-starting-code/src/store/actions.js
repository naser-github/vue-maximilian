export default {
  login(context) {
    setTimeout(function () {
      console.log('Logged In');
      context.commit('isAuth', { status: true });
    }, 200);
  },
  logout(context) {
    setTimeout(function () {
      context.commit('isAuth', { status: false });
    }, 200);
  },
};
