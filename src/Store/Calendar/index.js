import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutation.js";
export default {
  namespaced: true,
  state() {
    return {
      events: [],
    };
  },
  getters,
  actions,
  mutations,
};
