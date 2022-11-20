<template>
  <table class="table">
    <BodyHeader />
    <tbody class="table__body body">
      <BodyRow v-for="row in table.data" :key="row.id" :data="row" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BodyHeader from './bodyModules/BodyHeader.vue';
import BodyRow from './bodyModules/BodyRow.vue';
export default defineComponent({
  name: 'TableBody',
  components: {
    BodyRow,
    BodyHeader,
  },
  data() {
    return {};
  },
  computed: mapState(['table']),
});
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
}
</style>
