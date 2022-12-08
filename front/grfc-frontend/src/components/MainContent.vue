<template>
  <main class="content">
    <Menu />
    <SideBar />
    <Table />
  </main>
</template>

<script lang="ts">
import Menu from './contentComponents/Menu.vue';
import SideBar from './contentComponents/SideBar.vue';
import Table from './MainTable.vue';
export default {
  name: 'MainContent',
  components: {
    Table,
    SideBar,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
  height: calc(100% - 80px);
}
</style>
