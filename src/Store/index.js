import { createStore } from "vuex";
import NewsMod from "./News/index.js";
import EventsMod from "./Calendar/index.js";
import GaleryMod from "./Gallery/index.js";
import AuthMod from "./Auth/index.js";
const store = createStore({
  modules: {
    News: NewsMod,
    Events: EventsMod,
    Galery: GaleryMod,
    Auth: AuthMod,
  },
});

export default store;
