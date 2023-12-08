import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./Store/index.js";
import BaseContainer from "./Components/Ui/BaseContainer.vue";

const app = createApp(App);
app.component("base-container", BaseContainer);
app.use(store);
app.use(router);
app.mount("#app");
