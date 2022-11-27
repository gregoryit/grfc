<template>
  <div class="table-nav">
    <NavigationPaths />
    <form class="table-nav__form">
      <input class="table-nav__input" type="text" placeholder="Поиск..." />
    </form>
    <div class="table-nav__buttons">
      <button class="table-nav__search-btn" />
      <button class="table-nav__add-btn" />
      <span class="table-nav__vertical-line"></span>
      <button
        class="table-nav__settings-btn"
        @click="() => (isSettingActive = true)"
      />
      <button class="table-nav__save-btn" />
    </div>
  </div>
  <ModalSettings v-show="isSettingActive" :closeSettings="closeSettings" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationPaths from './navigationModules/Paths.vue';
import ModalSettings from './navigationModules/ModalSettings.vue';
export default defineComponent({
  name: 'TableNavigation',
  components: { NavigationPaths, ModalSettings },
  data() {
    return {
      isSettingActive: false,
    };
  },
  methods: {
    closeSettings(): void {
      this.isSettingActive = false;
    },
  },
});

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
