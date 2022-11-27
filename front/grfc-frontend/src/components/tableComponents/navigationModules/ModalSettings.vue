<template>
  <modal class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div class="modal__header-wrapper">
          <button class="modal__exit" @click="closeSettings">
            <img
              class="modal__exit-btn"
              src="@/assets/table/modal__exit-btn.svg"
              alt=""
            />
          </button>
          <h3 class="modal__header">Настройка таблицы</h3>
        </div>
        <div class="modal__content">
          <div class="modal__available-columns available">
            <span> Доступные столбцы: </span>
            <div class="available__rows">
              <button
                class="available__row"
                v-for="column in unselectedColumns"
                :key="column.id"
                @click="selectColumn(column.id)"
              >
                {{ column.name }}
              </button>
            </div>
          </div>
          <div class="modal__choosen-columns choosen">
            <span> Выбранные столбцы: </span>
            <div class="choosen__rows">
              <button
                class="choosen__row"
                v-for="column in selectedColumns"
                :key="column.id"
                @click="unselectColumn(column.id)"
              >
                {{ column.name }}
              </button>
            </div>
          </div>
        </div>
        <form class="modal__selectors selectors">
          <label for="selectors__rows">
            <span>Строк в таблице:</span>
            <select
              class="selectors__rows selectors_btn"
              id="selectors__rows"
              placeholder="Значимость"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label for="selectors__font-size">
            <span>Размер шрифта:</span>
            <select
              class="selectors__font-size selectors_btn"
              id="selectors__font-size"
              placeholder="Значимость"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label for="selectors__padding">
            <span>Отступ:</span>
            <select
              class="selectors__padding selectors_btn"
              id="selectors__padding"
              placeholder="Значимость"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'ModalSettings',
  props: {
    closeSettings: Function,
  },
  methods: {
    ...mapMutations(['selectColumn', 'unselectColumn']),
  },
  computed: {
    ...mapGetters({
      selectedColumns: 'getSelectedColumns',
      unselectedColumns: 'getUnselectedColumns',
    }),
  },
});
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: table;
  transition: opacity 0.3s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 700px;
  margin: 0px auto;
  padding: 40px 60px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal__header {
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  margin-top: 0;
  font-style: normal;
  color: #373951;
}

.modal__exit-btn {
  width: 18px;
  height: 18px;
  align-items: center;
}
.modal__exit-btn:hover {
  width: 20px;
  height: 20px;
  transition: 0;
  opacity: 0.75;
}

.modal__exit {
  float: right;
  margin: 5px 4px 5px;
  border: 0;
  border-radius: 100%;
  text-align: center;
  line-height: 20px;
  transition: 0.1s;
  color: #000;
  width: 22px;
  height: 22px;
  background: none;
  cursor: pointer;
}

.modal__content {
  display: flex;
  gap: 10px;
  color: #6d7095;
  padding-bottom: 7px;
}

.modal__available-columns,
.modal__choosen-columns {
  width: 100%;
}
.modal__header-wrapper {
  margin-bottom: 27px;
}
.available__rows,
.choosen__rows {
  border: 1px solid;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: #6d7095;
  overflow: scroll;
}
.available__row,
.choosen__row {
  transition: 0.08s;
  height: 40px;
  width: 95%;
  line-height: 40px;
  padding: 0 10px;
  text-align: start;
  border-radius: 10px;
  border: 0;
  color: #6d7095;
  background-color: #fff;
  &:hover {
    font-size: 14px;
    height: 48px;
    width: 100%;
    background-color: #f4f4f4;
  }
}

.selectors {
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  color: #6d7095;
  & > * {
    display: flex;
    gap: 10px;
  }
}
.selectors_btn {
  color: #6d7095;
}
</style>
