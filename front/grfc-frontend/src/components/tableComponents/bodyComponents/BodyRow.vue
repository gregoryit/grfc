<template>
  <tr class="body__row">
    <td class="body__cell">
      <input class="body__checkbox" type="checkbox" />
    </td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
    <td class="body__cell">Текст</td>
  </tr>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.body {
  &__cell {
    height: 40px;
    border: 1px solid #ebebeb;
    border-bottom: 0;
    text-align: center;
  }
}
</style>
