<template>
  <div class="table-wrapper">
    <TableNavigation />
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import TableNavigation from './tableComponents/TableNavigation.vue';
export default {
  name: 'MainTable',
  components: {
    TableNavigation,
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  height: fit-content;
  margin: 10px 10px 0;
  border: 1px solid #ebebeb;
  width: 100%;
}
</style>
