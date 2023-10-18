import { createStore } from "vuex";
import NewsMod from "./News/index.js";
import EventsMod from "./Calendar/index.js";
const store = createStore({
  modules: {
    News: NewsMod,
    Events: EventsMod,
  },
});

export default store;
