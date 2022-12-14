<template>
  <header class="header">
    <BurgerMenu />
    <Search />
    <Profile />
  </header>
</template>

<script lang="ts">
import BurgerMenu from './headerComponents/BurgerMenu.vue';
import Search from './headerComponents/Seach.vue';
import Profile from './headerComponents/Profile.vue';
export default {
  name: 'MainHeader',
  components: {
    BurgerMenu,
    Search,
    Profile,
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
