<template>
  <div class="table-wrapper">
    <TableNavigation />
    <TableBody />
  </div>
</template>

<script lang="ts">
import TableBody from './tableComponents/TableBody.vue';
import TableNavigation from './tableComponents/TableNavigation.vue';
export default {
  name: 'AppTable',
  components: {
    TableNavigation,
    TableBody,
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  height: fit-content;
  margin: 30px 10px 0;
  border: 1px solid #ebebeb;
  width: 100%;
}
</style>
