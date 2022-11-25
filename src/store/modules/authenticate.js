const authenticate = {
  namespaced: true,
  state: () => ({
    session: true,
  }),
  mutations: {
    logUser(state, status) {
      state.session = status;
    },
  },
  actions: {
    setSession({ commit }, session) {
      commit("logUser", session);
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.session;
    },
  },
};

export default authenticate;
