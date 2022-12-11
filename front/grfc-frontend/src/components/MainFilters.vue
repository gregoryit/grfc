<template>
  <div class="ftrs-settings">
    <div class="ftrs-settings__title">Условие:</div>
    <div class="ftrs-settings__selects">
      <select class="ftrs-settings__select">
        <option>И</option>
        <option>ИЛИ</option>
      </select>
    </div>
    <div class="ftrs-settings__buttons">
      <span class="ftrs-settings__vertical-line"></span>
      <button class="ftrs-settings__add-btn" />
      <button class="ftrs-settings__delete-btn" />
      <button class="ftrs-settings__save-btn" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFilters',
});
</script>

<style lang="scss" scoped>
.ftrs-settings {
  display: flex;
  background-color: #e8e8e8;
  color: #7c7f9f;
  gap: 10px;
  min-height: 51px;
  align-items: center;
  padding: 0 15px;
  &__select {
    min-width: 200px;
    min-height: 28px;
    color: #7c7f9f;
    border-color: #bebebe;
    border-radius: 6px;
  }
  &__title {
    height: fit-content;
  }
  &__buttons {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  &__buttons > * {
    cursor: pointer;
    height: 14px;
    background-color: transparent;
    width: 14px;
    border: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__vertical-line {
    border-left: 1px solid #bebebe;
    width: 0;
    height: 27px;
  }
  &__add-btn {
    background-image: url(@/assets/table/ftrs_add-btn.svg);
  }
  &__delete-btn {
    background-image: url(@/assets/table/ftrs_delete-btn.svg);
  }
  &__save-btn {
    background-image: url(@/assets/table/ftrs_save-btn.svg);
  }
}
</style>
