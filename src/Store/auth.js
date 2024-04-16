import { defineStore } from "pinia";

export const userAuthStore = defineStore("auth", {
  state: () => ({
    cloudinary_key: "235334789777131",
    cloudinary_secret_key: "vkX_nb9HpGiYBhNJZiZJzSQAEFY",
    cloud_name: "dz3kblnlk",
    firebase_api_key: "AIzaSyB5i_UzL5-_lZV3kXLO0u2jJQi-ics1f4o",
    userId: null,
    token: null,
    tokenExpiration: null,
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  actions: {
    async logInToApp(payload) {
      const { firebase_api_key } = this;

      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase_api_key}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
              returnSecureToken: true,
            }),
          }
        );

        const data = await response.json();

        if (data.idToken) {
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("userId", data.localId);
          this.token = data.idToken;
          this.userId = data.localId;
          this.tokenExpiration = data.expiresIn;
        }
      } catch (error) {
        const err = new Error(error.message || "Auth to failed");
        throw err;
      }
    },
    logOutApp() {
      localStorage.clear();
      this.token = null;
      this.userId = null;
      this.tokenExpiration = null;
    },
  },
});
