<template>
  <thead class="table__header header">
    <tr class="header__row">
      <th class="header__cell"></th>
      <th class="header__cell" v-for="cell in selectedColumns" :key="cell.id">
        <div class="header__cell-wrapper">
          <span class="header__text">{{ cell.name }}</span>
          <div class="header__buttons-wrapper">
            <button
              v-if="cell.searchType === 'default'"
              class="header__sort-button"
            >
              <img :src="require('@/assets/table/body_length.svg')" />
            </button>
            <button v-else class="header__sort-toggle">
              <img :src="require('@/assets/table/body_date.svg')" />
            </button>
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'BodyHeader',
  methods: {},
  computed: mapGetters({
    selectedColumns: 'tableHeader/getSelectedColumns',
  }),
});
</script>

<style scoped lang="scss">
.header {
  &__cell {
    height: 40px;
    border: 1px solid #ebebeb;
    background-color: #e8e8e8;
    justify-content: space-between;
    padding: 0 15px;
  }
  &__cell-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
  &__text {
    float: left;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #7c7f9f;
  }
  &__buttons-wrapper {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  &__sort-button,
  &__sort-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: 0.2s;
    border-radius: 10em;
    &:hover {
      background-color: #dddddd;
    }
    &.down {
      transform: rotate(180deg);
    }
  }
}
</style>
