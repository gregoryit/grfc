<template>
  <label class="find-btn">
    <input
      class="find-btn__input"
      type="radio"
      value="find"
      v-model="checked"
      @click="$router.push('/')"
    />
    <span class="find-btn__text">Найдено ({{ findedLength }})</span>
  </label>
  <label class="filter-btn">
    <input
      class="filter-btn__input"
      type="radio"
      value="filter"
      v-model="checked"
      @click="$router.push('/filter')"
    />
    <span class="filter-btn__text">Фильтры</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  name: 'NavigationPaths',
  data() {
    return {
      checked: 'find',
    };
  },
  computed: mapGetters({
    findedLength: 'getFindedLength',
  }),
});
</script>

<style lang="scss" scoped>
.find-btn,
.filter-btn {
  display: flex;
  position: relative;
  cursor: pointer;
  max-width: 150px;
  width: 100%;
  border: 0;
  &__input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  &__text {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 38px;
    background-color: #c2c2c2;
    color: #3f3f3f;
  }
}
.find-btn__input:checked + .find-btn__text {
  background-color: #e2e2e2;
  color: #000000;
}
.filter-btn__input:checked + .filter-btn__text {
  background-color: #e2e2e2;
  color: #000000;
}
</style>
