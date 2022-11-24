const user = {
  namespaced: true,
  state: () => ({
    userData: {
      username: "",
      avatar: "",
      name: "",
    },
  }),
  mutations: {
    setUser(state, data) {
      state.userData = { ...data };
    },
    clearUser(state) {
      state.userData = {
        username: "",
        avatar: "",
        name: "",
      };
    },
  },
  actions: {
    loginUser({ commit }, userData) {
      commit("setUser", userData);

      localStorage.setItem("user", JSON.stringify(userData));
    },
    logout({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    async getAvatar(state) {
      let avatar = state.avatar;
      let background = Math.floor(Math.random() * 16777215).toString(16);
      if (avatar === "") {
        await fetch(
          `https://ui-avatars.com/api/?name=${state.username}&background${background}`
        )
          .then((response) => response.json())
          .then((data) => (avatar = data))
          .catch((error) => console.error("Error:", error));
      }
      return state.drawer;
    },
    getUserData(state, getters) {
      let userData = JSON.parse(localStorage.getItem("user"));

      if (!userData) {
        userData = {
          ...state.userData,
          avatar: getters.getAvatar,
        };
      }

      return userData;
    },
  },
};

export default user;
