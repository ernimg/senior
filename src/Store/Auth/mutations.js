export default {
  setUser(state, payload) {
    if (payload.token) {
      localStorage.setItem("token", payload.token);
    }

    state.token = localStorage.getItem("token");
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
