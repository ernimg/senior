import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./Store/index.js";
import BaseContainer from "./Components/Ui/BaseContainer.vue";
import BaseSpiner from "./Components/Ui/BaseSpiner.vue";
import BaseButton from "./Components/Ui/BaseButton.vue";

const app = createApp(App);
app.component("base-container", BaseContainer);
app.component("base-spiner", BaseSpiner);
app.component("base-button", BaseButton);
app.use(store);
app.use(router);
app.mount("#app");
