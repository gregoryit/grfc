<template>
  <div class="table-wrapper">
    <TableNavigation />
  </div>
</template>

<script lang="ts">
import TableNavigation from './tableComponents/TableNavigation.vue';
export default {
  name: 'AppTable',
  components: {
    TableNavigation,
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin: 30px 10px 0;
}
</style>
