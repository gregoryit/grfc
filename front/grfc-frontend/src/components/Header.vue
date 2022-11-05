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
  display: flex;
  background-color: #000084;
  height: 100px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
