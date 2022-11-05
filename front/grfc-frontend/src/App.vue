<template>
  <Header />
  <Table />
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Table from './components/Table.vue';
export default {
  name: 'App',
  components: {
    Header,
    Table,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 1440px;
  margin: auto;
}
</style>
