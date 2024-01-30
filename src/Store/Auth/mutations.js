export default {
  setUser(state, payload) {
    if (payload.token) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("userId", payload.userId);
    }

    state.token = localStorage.getItem("token");
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
