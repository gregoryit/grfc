<template>
  <thead class="table__header header">
    <tr class="header__row">
      <th class="header__cell">
        <input class="header__main-checkbox" type="checkbox" />
      </th>
      <th class="header__cell" v-for="item in mokHeader" :key="item.id">
        <div class="header__cell-wrapper">
          <span class="header__text">{{ item.name }}</span>
          <div class="header__buttons-wrapper">
            <button v-if="item.hasSearch" class="header__sort-button">
              <img :src="require('@/assets/table/body_search.svg')" />
            </button>
            <button v-if="item.imageSrc" class="header__sort-toggle">
              <img
                :src="require('@/assets/table/body_' + item.imageSrc + '.svg')"
              />
            </button>
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BodyHeader',
  data() {
    return {
      mokHeader: [
        { id: 1, name: 'Код', hasSearch: true },
        { id: 2, name: 'Наименование', imageSrc: 'arrow' },
        { id: 3, name: 'Описание', imageSrc: 'length' },
        {
          id: 4,
          name: 'Автор',
          hasSearch: true,
          imageSrc: 'arrow',
        },
        { id: 5, name: 'Тип', imageSrc: 'length' },
        {
          id: 6,
          name: 'Статус',
          hasSearch: true,
          imageSrc: 'arrow',
        },
        { id: 7, name: 'Дата', imageSrc: 'date' },
      ],
    };
  },
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
  }
  &__buttons-wrapper {
    display: flex;
    gap: 3px;
  }
  &__sort-button,
  &__sort-toggle {
    border: 0;
    background-color: transparent;
  }
}
</style>
