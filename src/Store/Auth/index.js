import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      cloudinary_key: "235334789777131",
      cloudinary_secret_key: "vkX_nb9HpGiYBhNJZiZJzSQAEFY",
      cloud_name: "dz3kblnlk",
      firebase_api_key: "AIzaSyB5i_UzL5-_lZV3kXLO0u2jJQi-ics1f4o",
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations,
  actions,
  getters,
};
