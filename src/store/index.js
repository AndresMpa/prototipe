import { createStore, createLogger } from "vuex";

import authenticate from "@modules/authenticate.js";
import global from "@modules/global.js";
import user from "@modules/user.js";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  modules: {
    auth: authenticate,
    global: global,
    user: user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
