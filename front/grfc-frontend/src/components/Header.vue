<template>
  <div class="header">
    <BurgerMenu />
    <button @click="handleClick">asdf</button>
    <span class="header__logo">{{store.state.theme.isDarkMode}}</span>
    <SearchBar />
    <ProfileBar />
  </div>
</template>

<script lang="ts">
import BurgerMenu from './headerComponents/BurgerMenu.vue';
import SearchBar from './headerComponents/SeachBar.vue';
import ProfileBar from './headerComponents/ProfileBar.vue';
import { useStore } from '@/store';

export default {
  name: 'AppHeader',
  components: {
    BurgerMenu,
    SearchBar,
    ProfileBar,
  },
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    getThemeMode(): boolean {
      return this.$store.getters.getThemeMode;
    },
  },
  methods: {
    handleClick(): void {
      this.$store.commit('changeTheme');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #000084;
}
</style>
