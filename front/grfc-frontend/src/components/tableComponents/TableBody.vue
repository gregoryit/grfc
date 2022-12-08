<template>
  <table class="table">
    <BodyHeader />
    <tbody class="table__body body">
      <BodyRow v-for="row in data" :key="row.id" :data="row" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
import BodyHeader from './bodyModules/BodyHeader.vue';
import BodyRow from './bodyModules/BodyRow.vue';

export default defineComponent({
  name: 'TableBody',
  components: {
    BodyRow,
    BodyHeader,
  },
  computed: {
    ...mapState(['table']),
    ...mapGetters({
      data: 'getPaginatedData',
    }),
  },
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
