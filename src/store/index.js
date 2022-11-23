import { createStore, createLogger } from "vuex";

import authenticate from "@modules/authenticate.js";
import global from "@modules/global.js";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  modules: {
    auth: authenticate,
    global: global,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
