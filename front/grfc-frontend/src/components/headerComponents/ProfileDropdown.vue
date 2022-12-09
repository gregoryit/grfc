<template>
  <div id="notificationsDropdown__wrapper">
    <div class="notificationsDropdown__body">
      <button @click="$emit('toggle')" class="notificationsDropdown__close-btn">
        <img src="../../assets/header/close_btn.svg"
             alt="X"
             class="notificationsDropdown__close-svg">
      </button>
      <div class="notificationsDropdown__content">
        <div class="notificationsDropdown__item">
          <div class="notificationsDropdown__info">
            <div class="notificationsDropdown__title">Название</div>
            <div class="notificationsDropdown__time">now</div>
          </div>
          <div class="notificationsDropdown__description">
            Описание... <br/>...</div>
        </div>
        <div class="notificationsDropdown__item">
          <div class="notificationsDropdown__info">
            <div class="notificationsDropdown__title">Название</div>
            <div class="notificationsDropdown__time">9:30 AM</div>
          </div>
          <div class="notificationsDropdown__description">
            Описание... <br />...
          </div>
        </div>
        <div class="notificationsDropdown__item">
          <div class="notificationsDropdown__info">
            <div class="notificationsDropdown__title">Название</div>
            <div class="notificationsDropdown__time">9:25 AM</div>
          </div>
          <div class="notificationsDropdown__description">
            Описание... <br />...
          </div>
        </div>
        <div class="notificationsDropdown__item">
          <div class="notificationsDropdown__info">
            <div class="notificationsDropdown__title">Название</div>
            <div class="notificationsDropdown__time">9:20 AM</div>
          </div>
          <div class="notificationsDropdown__description">
            Описание... <br />...
          </div>
        </div>
        <a href=""
           class="notificationsDropdown__open-all"
           target="#">Открыть все...</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'ProfileDropdown',
});
</script>

<style lang="scss" scoped>

#notificationsDropdown__wrapper {
  z-index: 1000;
  position: absolute;
  top: 80px;
  left: 1030px;
}
.notificationsDropdown__body {
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 368px;
  background: linear-gradient(180deg, rgba(0, 8, 85, 0.6) 0%, #000855 100%);
}

.notificationsDropdown__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  margin-top: 20px;

}

.notificationsDropdown__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 215px;
  height: 70px;
  background: rgba(255, 254, 254, 0.7);
  opacity: 0.8;
  border-radius: 10px;
}

.notificationsDropdown__info {
  display: flex;
  width: 198px;
  height: 24px;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.8);
}

.notificationsDropdown__description {
  width: 199px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.8);
}

.notificationsDropdown__open-all {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.notificationsDropdown__close-btn {
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
