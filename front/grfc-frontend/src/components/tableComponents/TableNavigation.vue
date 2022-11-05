<template>
  <div class="table-nav">
    <button class="table-nav__find-btn">Найдено</button>
    <button class="table-nav__filters-btn">Фильтры</button>
    <form class="table-nav__form">
      <input class="table-nav__input" type="text" placeholder="Поиск..." />
    </form>
    <div class="table-nav__buttons">
      <button class="table-nav__search-btn" alt="alt" />
      <button class="table-nav__add-btn" alt="alt" />
      <button class="table-nav__settings-btn" alt="alt" />
      <button class="table-nav__save-btn" alt="alt" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableNavigation',
};
</script>

<style lang="scss" scoped>
.table-nav {
  display: flex;
  width: 100%;
}
.table-nav__form {
  width: 100%;
}
.table-nav__input {
  width: 100%;
}
.table-nav__buttons {
  display: flex;
  gap: 10px;
}
.table-nav__buttons > * {
  cursor: pointer;
  height: 20px;
  background-color: transparent;
  width: 20px;
  border: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.table-nav__search-btn {
  background-image: url('../../assets/table/Search.svg');
}
.table-nav__add-btn {
  background-image: url('@/assets/table/Add.svg');
}
.table-nav__settings-btn {
  background-image: url('@/assets/table/Settings.svg');
}
.table-nav__save-btn {
  background-image: url('@/assets/table/Save.svg');
}
</style>
