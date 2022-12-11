<template>
  <div id="notifications-dropdown__wrapper">
    <div class="notifications-dropdown__body">
      <button @click="$emit('toggle')" class="notifications-dropdown__close-btn">
        <img
          src="../../assets/header/close_btn.svg"
          alt="X"
          class="notifications-dropdown__close-svg"
        />
      </button>
      <div class="notifications-dropdown__content">
        <div class="notifications-dropdown__item">
          <div class="notifications-dropdown__info">
            <div class="notifications-dropdown__title">Название</div>
            <div class="notifications-dropdown__time">now</div>
          </div>
          <div class="notifications-dropdown__description">
            Описание... <br />...
          </div>
        </div>
        <div class="notifications-dropdown__item">
          <div class="notifications-dropdown__info">
            <div class="notifications-dropdown__title">Название</div>
            <div class="notifications-dropdown__time">9:30 AM</div>
          </div>
          <div class="notifications-dropdown__description">
            Описание... <br />...
          </div>
        </div>
        <div class="notifications-dropdown__item">
          <div class="notifications-dropdown__info">
            <div class="notifications-dropdown__title">Название</div>
            <div class="notifications-dropdown__time">9:25 AM</div>
          </div>
          <div class="notifications-dropdown__description">
            Описание... <br />...
          </div>
        </div>
        <div class="notifications-dropdown__item">
          <div class="notifications-dropdown__info">
            <div class="notifications-dropdown__title">Название</div>
            <div class="notifications-dropdown__time">9:20 AM</div>
          </div>
          <div class="notifications-dropdown__description">
            Описание... <br />...
          </div>
        </div>
        <a href="" class="notifications-dropdown__open-all" target="#"
          >Открыть все...</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProfileDropdown',
});
</script>

<style lang="scss" scoped>
#notifications-dropdown__wrapper {
  z-index: 1000;
  position: absolute;
  top: 80px;
}
.notifications-dropdown__body {
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 368px;
  background: linear-gradient(180deg, rgba(0, 8, 85, 0.6) 0%, #000855 100%);
}

.notifications-dropdown__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  margin-top: 20px;
}

.notifications-dropdown__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 215px;
  height: 70px;
  background: rgba(255, 254, 254, 0.7);
  border-radius: 10px;
}

.notifications-dropdown__info {
  display: flex;
  width: 198px;
  height: 24px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.8);
}

.notifications-dropdown__description {
  width: 199px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.8);
}

.notifications-dropdown__open-all {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.notifications-dropdown__close-btn {
  width: 23px;
  height: 23px;
  border: 0;
  outline: none;
  background-color: transparent;
  position: absolute;
  left: 212px;
  bottom: 355px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
</style>
