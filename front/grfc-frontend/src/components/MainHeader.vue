<template>
  <header class="header">
    <BurgerMenu @click="$store.commit('toggleMenu')" />
    <SearchBar />
    <ProfileBar />
  </header>
</template>

<script lang="ts">
import BurgerMenu from './headerComponents/BurgerMenu.vue';
import SearchBar from './headerComponents/SeachBar.vue';
import ProfileBar from './headerComponents/ProfileBar.vue';
export default {
  name: 'AppHeader',
  components: {
    BurgerMenu,
    SearchBar,
    ProfileBar,
  },
  props: {
    toggleMenu: Function,
  },
  data() {
    return {
      isMenuActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #000855;
  height: 80px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
