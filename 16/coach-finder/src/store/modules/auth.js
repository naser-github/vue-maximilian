let timer = 0;
export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      autoLogout: false,
    };
  },
  actions: {
    async signUp(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "signup",
      });
    },

    async login(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "login",
      });
    },

    async auth(context, payload) {
      const mode = payload.mode;
      let url = null;

      if (mode === "signup") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBG5UBInS4qUiPzNMg__ADwfKlSI7_s4GU";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG5UBInS4qUiPzNMg__ADwfKlSI7_s4GU";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        const error = new Error(
          responseData.message || "Failed to authenticate"
        );
        throw error;
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(function () {
        context.dispatch("autoLogout");
      }, expiresIn);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: expirationDate,
      });
    },

    async checkLogin(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      setTimeout(function () {
        context.dispatch("autoLogout");
      }, expiresIn);

      if (token && userId) {
        context.commit("setUser", {
          token: token,
          userId: userId,
          tokenExpiration: tokenExpiration,
        });
      }
    },

    logout(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");

      clearTimeout(timer);

      context.commit("setUser", {
        userId: null,
        token: null,
        tokenExpiration: null,
      });
    },

    autoLogout(context) {
      context.dispatch("logout");
      context.commit("autoLogout");
    },
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getToken(state) {
      return state.token;
    },

    isAuth(state) {
      return !!state.token;
    },

    isAutoLogout(state) {
      return state.autoLogout;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
      state.autoLogout = false;
    },

    autoLogout(state) {
      state.autoLogout = true;
    },
  },
};
