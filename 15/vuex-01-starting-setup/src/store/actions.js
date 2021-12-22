export default {
  logIn(context) {
    setTimeout(function () {
      console.log('Logged In');
      context.commit('setAuth', { isAuth: true });
    }, 200);
  },

  logOut(context) {
    setTimeout(function () {
      console.log('Logged Out');
      context.commit('setAuth', { isAuth: false });
    }, 200);
  },
};
