<template>
  <tr class="body__row" :class="{ selected: selected }">
    <td class="body__cell">
      <input v-model="selected" class="body__checkbox" type="checkbox" />
    </td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
  </tr>
</template>

<script lang="ts">
export default {
  name: 'BodyRow',
  data() {
    return {
      selected: false,
    };
  },
};
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
