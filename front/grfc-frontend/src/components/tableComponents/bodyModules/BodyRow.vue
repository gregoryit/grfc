<template>
  <tr class="body__row" :class="{ selected: selected }">
    <td class="body__cell" v-for="(item, key, index) in data" :key="index">
      <input
        v-if="key === 'id'"
        v-model="selected"
        class="body__checkbox"
        type="checkbox"
      />
      <span v-else>{{ item }}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BodyRow',
  props: {
    data: Object,
  },
  data() {
    return {
      selected: false,
    };
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
