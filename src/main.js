// Components
import App from "./App.vue";

// Router
import router from "@router/index.js";

// State handler
import store from "@store/index.js";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(store);

app.mount("#app");
