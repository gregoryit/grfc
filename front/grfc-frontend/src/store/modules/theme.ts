export interface IStateTheme {
  isDarkMode: boolean;
}

export default {
  state() {
    return {
      isDarkMode: false,
    };
  },
  mutations: {
    changeTheme(state: IStateTheme) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  getters: {
    getTheme(state: IStateTheme) {
      return state.isDarkMode;
    },
  },
};
