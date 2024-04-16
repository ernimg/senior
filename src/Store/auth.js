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
      const api_key = this.firebase_api_key;

      await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=` +
          api_key,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const auth = {
            token: data.idToken,
            userId: data.localId,
            tokenExpiration: data.expiresIn,
          };

          if (auth.token) {
            localStorage.setItem("token", auth.token);
            localStorage.setItem("userId", auth.userId);
          }

          this.token = localStorage.getItem("token");
          this.userId = payload.userId;
          this.tokenExpiration = payload.tokenExpiration;
        })
        .catch((error) => {
          const err = new Error(error.message || "Auth to failed");
          throw err;
        });
    },
    logOutApp() {
      localStorage.clear();
      this.token = null;
      this.userId = null;
      this.tokenExpiration = null;
    },
  },
});
