<template>
  <table class="table">
    <thead class="table__header header">
      <tr class="header__row">
        <th class="header__cell">
          <input class="header__main-checkbox" type="checkbox" />
        </th>
        <th class="header__cell">
          <span class="header__text">Текст</span>
          <input class="header__checkbox" type="checkbox" />
        </th>
        <th class="header__cell">
          <span class="header__text">Текст</span>
          <input class="header__checkbox" type="checkbox" />
        </th>
        <th class="header__cell">
          <span class="header__text">Текст</span>
          <input class="header__checkbox" type="checkbox" />
        </th>
        <th class="header__cell">
          <span class="header__text">Текст</span>
          <input class="header__checkbox" type="checkbox" />
        </th>
        <th class="header__cell">
          <span class="header__text">Текст</span>
          <input class="header__checkbox" type="checkbox" />
        </th>
      </tr>
    </thead>
    <tbody class="table__body body">
      <BodyRow v-for="item in mokArray" :key="item" />
    </tbody>
  </table>
</template>

<script lang="ts">
import BodyRow from './bodyComponents/BodyRow.vue';
export default {
  name: 'TableBody',
  components: {
    BodyRow,
  },
  data() {
    return {
      mokArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  .header {
    &__cell {
      height: 40px;
      border: 1px solid #ebebeb;
      background-color: #e8e8e8;
      justify-content: space-between;
      padding: 0 15px;
    }
    &__text {
      float: left;
    }
    &__checkbox {
      float: right;
    }
  }
}
</style>
