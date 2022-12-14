<template>
  <th class="header__cell">
    <div class="header__cell-wrapper">
      <span class="header__text">{{ cell?.name }}</span>
      <div class="header__buttons-wrapper">
        <label
          v-if="cell?.searchType === 'default'"
          :for="cell.value"
          class="header__sort"
        >
          <input
            class="header__input"
            type="checkbox"
            :id="cell.value"
            @click="toggleModal"
          />
          <img
            v-if="sortColumn.key !== cell.value"
            :src="require('@/assets/table/body_length.svg')"
            :id="cell.value"
          />
          <img
            v-else-if="
              sortColumn.key === cell.value && sortColumn.direction === true
            "
            :src="require('@/assets/table/body_arrow.svg')"
            :id="cell.value"
          />
          <img
            v-else-if="
              sortColumn.key === cell.value && sortColumn.direction === false
            "
            :src="require('@/assets/table/body_arrow.svg')"
            :id="cell.value"
            style="transform: rotate(180deg)"
          />
          <DropdownWindow
            v-if="isModalActive"
            :closeModal="closeModal"
            :buttonId="cell.value"
          >
            <div class="header__dropdown dropdown">
              <button
                class="dropdown__sort"
                @click="sortBy([cell?.value, true])"
              >
                <img :src="require('@/assets/table/body_arrow.svg')" />
                <span class="dropdown__text">По возрастанию</span>
                <span
                  class="dropdown__remove"
                  v-show="
                    sortColumn.key === cell.value &&
                    sortColumn.direction === true
                  "
                  >x</span
                >
              </button>
              <button
                class="dropdown__sort"
                @click="sortBy([cell?.value, false])"
              >
                <img
                  style="transform: rotate(180deg)"
                  :src="require('@/assets/table/body_arrow.svg')"
                />
                <span class="dropdown__text">По убыванию</span>
                <span
                  class="dropdown__remove"
                  v-show="
                    sortColumn.key === cell.value &&
                    sortColumn.direction === false
                  "
                  >x</span
                >
              </button>
            </div>
          </DropdownWindow>
        </label>
        <button v-else class="header__sort" :class="cell?.value">
          <img :src="require('@/assets/table/body_date.svg')" />
        </button>
      </div>
    </div>
  </th>
</template>

<script lang="ts">
import DropdownWindow from '@/components/UI/DropdownWindow.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
export default defineComponent({
  name: 'BodyHeaderCell',
  components: { DropdownWindow },
  props: {
    cell: Object,
  },
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    ...mapMutations({
      sortBy: 'sortBy',
    }),
    toggleModal() {
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
    },
  },
  computed: {
    ...mapGetters({
      sortColumn: 'getSortColumn',
    }),
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
    position: relative;
  }
  &__cell-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
  &__input {
    display: none;
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
  &__sort {
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
  }
}
.dropdown {
  z-index: 1000;
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  top: calc(100% + 2px);
  right: 2px;
  display: flex;
  flex-direction: column;
  padding: 2px;
  background: #fff;
  font-weight: 400;
  font-size: 12px;
  &__search {
    height: 25px;
  }
  &__sort {
    height: 25px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: 0;
    background: 0;
    cursor: pointer;
    &:hover {
      background: #e8e8e8;
    }
  }
  &__input {
    width: 100%;
  }
  &__text {
    white-space: nowrap;
    height: fit-content;
    color: #6d7095;
  }
  &__remove {
    margin-left: auto;
  }
}
</style>
