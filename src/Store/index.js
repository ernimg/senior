import { createStore } from "vuex";

import GaleryMod from "./Gallery/index.js";

const store = createStore({
  modules: {
    Galery: GaleryMod,
  },
});

export default store;
