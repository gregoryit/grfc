<template>
  <thead class="table__header header">
    <tr class="header__row">
      <th class="header__cell"></th>
      <th class="header__cell" v-for="item in mokHeader" :key="item.id">
        <div class="header__cell-wrapper">
          <span class="header__text">{{ item.name }}</span>
          <div class="header__buttons-wrapper">
            <button v-if="item.hasSearch" class="header__sort-button">
              <img :src="require('@/assets/table/body_search.svg')" />
            </button>
            <button
              v-if="item.imageSrc"
              class="header__sort-toggle"
              :class="{ down: item.direction }"
              @click="selectSort(item.value)"
            >
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
        {
          id: 1,
          value: 'code',
          name: 'Код',
          hasSearch: true,
          direction: false,
        },
        {
          id: 2,
          value: 'name',
          name: 'Наименование',
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 3,
          value: 'description',
          name: 'Описание',
          imageSrc: 'length',
          direction: false,
        },
        {
          id: 4,
          value: 'author',
          name: 'Автор',
          hasSearch: true,
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 5,
          value: 'type',
          name: 'Тип',
          imageSrc: 'length',
          direction: false,
        },
        {
          id: 6,
          value: 'status',
          name: 'Статус',
          hasSearch: true,
          imageSrc: 'arrow',
          direction: false,
        },
        {
          id: 7,
          value: 'date',
          name: 'Дата',
          imageSrc: 'date',
          direction: false,
        },
      ],
    };
  },
  methods: {
    selectSort(value: string) {
      this.mokHeader.forEach((item) => {
        if (item.value === value) {
          this.$store.commit('sortBy', [value, item.direction]);
          item.direction = !item.direction;
        }
      });
    },
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
