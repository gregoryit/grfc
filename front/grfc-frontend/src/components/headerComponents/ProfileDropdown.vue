<template>
  <div id="menu-dropdown__wrapper">
    <div class="menu-dropdown__body">
      <button @click="$emit('toggle')" class="menu-dropdown__close">
        <img
          src="../../assets/header/close_btn.svg"
          alt="X"
          class="notifications-dropdown__close-svg"
        />
      </button>
      <div class="menu-dropdown__content">
        <button class="menu-dropdown__item">Мой профиль</button>
        <button class="menu-dropdown__item">Настройки</button>
        <button class="menu-dropdown__item" @click="$emit('logOut')">
          Выход
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuDropdown',
});
</script>

<style lang="scss" scoped>
#menu-dropdown__wrapper {
  z-index: 1000;
  position: absolute;
  top: 80px;
}
.menu-dropdown__body {
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 300px;
  background: #000855;
  position: relative;
}

.menu-dropdown__content {
  display: flex;
  flex-direction: column;
}

.menu-dropdown__item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f3f4f4;
  margin-top: 35px;
  background: transparent;
  border: 0;
}

.menu-dropdown__close {
  cursor: pointer;
  background-color: #000855;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 15px;
  border: none;
}
</style>
