import mutation from "./mutation.js";
import actions from "./actions.js";
import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      cloudinary_key: "",
      cloudinary_secret_key: "",
      cloud_name: "",
      firebase_api_key: "AIzaSyB5i_UzL5-_lZV3kXLO0u2jJQi-ics1f4o",
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutation,
  actions,
  getters,
};
