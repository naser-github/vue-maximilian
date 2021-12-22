export default {
  // logIn(state) {
  //   state.isLoggedIn = true;
  // },

  // logOut(state) {
  //   state.isLoggedIn = false;
  // },

  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
