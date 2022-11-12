export interface IStateMenu {
  isMenuActive: boolean;
}

export default {
  state() {
    return {
      isMenuActive: false,
    };
  },
  mutations: {
    toggleMenu(state: IStateMenu) {
      state.isMenuActive = !state.isMenuActive;
    },
  },
};
