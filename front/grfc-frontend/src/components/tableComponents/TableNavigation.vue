<template>
  <div class="table-nav">
    <NavigationPaths />
    <form class="table-nav__form">
      <input class="table-nav__input" type="text" placeholder="Поиск..." />
    </form>
    <div class="table-nav__buttons">
      <button class="table-nav__search-btn" alt="alt" />
      <button class="table-nav__add-btn" alt="alt" />
      <span class="table-nav__vertical-line"></span>
      <button class="table-nav__settings-btn" alt="alt" />
      <button class="table-nav__save-btn" alt="alt" />
    </div>
  </div>
</template>

<script lang="ts">
import NavigationPaths from './navigationComponents/NavigationPaths.vue';

export default {
  name: 'TableNavigation',
  components: { NavigationPaths },
};
</script>

<style lang="scss" scoped>
.table-nav {
  display: flex;
  width: 100%;
  height: 40px;
  padding-right: 10px;
  &__form {
    width: 100%;
    height: 100%;
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border: 0;
  }
  &__buttons {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  &__buttons > * {
    cursor: pointer;
    height: 17px;
    background-color: transparent;
    width: 17px;
    border: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__search-btn {
    background-image: url('../../assets/table/Search.svg');
  }
  &__add-btn {
    background-image: url('@/assets/table/Add.svg');
  }
  &__vertical-line {
    border-left: 1px solid #ebebeb;
    width: 0;
    height: 30px;
  }
  &__settings-btn {
    background-image: url('@/assets/table/Settings.svg');
  }
  &__save-btn {
    background-image: url('@/assets/table/Save.svg');
  }
}
</style>
