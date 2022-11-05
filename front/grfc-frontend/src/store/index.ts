import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import theme, { IStateTheme } from './modules/theme';

export interface State {
  theme: IStateTheme;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: { theme },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
