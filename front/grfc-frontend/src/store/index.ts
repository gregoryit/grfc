import menu, { IStateMenu } from './modules/menu';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import theme, { IStateTheme } from './modules/theme';

export interface State {
  theme: IStateTheme;
  menu: IStateMenu;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: {
    theme,
    menu,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
