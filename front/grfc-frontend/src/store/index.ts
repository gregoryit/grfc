import table, { ITable } from './modules/table';
import menu, { IStateMenu } from './modules/menu';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import theme, { IStateTheme } from './modules/theme';

export interface State {
  theme: IStateTheme;
  menu: IStateMenu;
  table: ITable;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: {
    theme,
    menu,
    table,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
