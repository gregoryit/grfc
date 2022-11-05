<template>
  <header class="header">
    <BurgerMenu />
    <SearchBar />
    <ProfileBar />
  </header>
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
};

</script>

<style lang="scss" scoped>

.header {
  background-color: #000084;
  height: 100px;
  width: 100vw;
}

</style>
