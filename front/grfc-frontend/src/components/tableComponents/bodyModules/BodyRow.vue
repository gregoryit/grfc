<template>
  <tr class="body__row" :class="{ selected: selected }">
    <td
      class="body__cell"
      v-for="(item, key, index) in filteredData"
      :key="index"
    >
      <input
        v-if="key === 'id'"
        v-model="selected"
        class="body__checkbox"
        type="checkbox"
      />
      <span
        v-else-if="
          key === 'date' || key === 'dateOfCreate' || key === 'dateOfEdit'
        "
      >
        {{ formateDate(item as Date) }}
      </span>
      <span v-else>{{ item }}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { format } from 'date-fns';
import { ITableRow } from '@/store/modules/table';

export default defineComponent({
  name: 'BodyRow',
  props: {
    data: Object,
  },
  methods: {
    formateDate(date: Date) {
      return format(date, 'dd.MM.yyyy');
    },
  },
  computed: {
    selected: {
      get() {
        return this.$store.getters.isRowSelected(this.data?.id);
      },
      set() {
        this.$store.commit('toggleRowSelection', this.data?.id);
      },
    },
    filteredData(): ITableRow {
      return this.$store.getters.getDataByColumns(this.data?.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.body {
  &__row.selected {
    background: #f2f2f2;
  }
  &__cell {
    height: 40px;
    border: 1px solid #ebebeb;
    border-bottom: 0;
    text-align: center;
  }
}
</style>
