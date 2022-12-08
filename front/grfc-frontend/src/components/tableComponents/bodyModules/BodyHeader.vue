<template>
  <thead class="table__header header">
    <tr class="header__row">
      <th class="header__cell"></th>
      <Cell
        v-for="cell in selectedColumns"
        :cell="cell"
        :key="cell.id"
        :ref="cell"
      />
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import Cell from './BodyHeaderCell.vue';

export default defineComponent({
  components: { Cell },
  name: 'BodyHeader',
  computed: mapGetters({
    selectedColumns: 'tableHeader/getSelectedColumns',
  }),
});
</script>

<style scoped lang="scss">
.header__cell {
  border: 1px solid #ebebeb;
  background-color: #e8e8e8;
  position: relative;
  padding: 0 15px;
}
</style>
