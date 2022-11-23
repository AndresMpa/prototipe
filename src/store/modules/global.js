const global = {
  namespaced: true,
  state: () => ({
    drawer: true,
  }),
  mutations: {
    toggle(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit("toggle");
    },
  },
  getters: {
    getDrawer(state) {
      return state.drawer;
    },
  },
};

export default global;
