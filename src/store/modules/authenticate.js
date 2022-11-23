const authenticate = {
  namespaced: true,
  state: () => ({
    session: true,
  }),
  mutations: {},
  actions: {},
  getters: {
    isLoggedIn(state) {
      return state.session;
    },
  },
};

export default authenticate;
