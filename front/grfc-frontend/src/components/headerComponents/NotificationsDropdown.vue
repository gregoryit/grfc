<template>
  <transition-group name="fade">
  <div id="NotificationsDropdown__wrapper">
    <div class="NotificationsDropdown__body">
      <div class="NotificationsDropdown__content">

        <div class="NotificationDropdown__item">
          <div class="NotificationDropdown__info">
            <div class="NotificationDropdown__title">Название</div>
            <div class="NotificationDropdown__time">now</div>
          </div>
          <div class="NotificationDropdown__description">
            Описание... <br/>...</div>
        </div>

        <div class="NotificationDropdown__item">
          <div class="NotificationDropdown__info">
            <div class="NotificationDropdown__title">Название</div>
            <div class="NotificationDropdown__time">9:30 AM</div>
          </div>
          <div class="NotificationDropdown__description">
            Описание... <br />...
        </div>
          </div>

        <div class="NotificationDropdown__item">
          <div class="NotificationDropdown__info">
            <div class="NotificationDropdown__title">Название</div>
            <div class="NotificationDropdown__time">9:25 AM</div>
          </div>
          <div class="NotificationDropdown__description">
            Описание... <br />...
          </div>
        </div>

        <div class="NotificationDropdown__item">
          <div class="NotificationDropdown__info">
            <div class="NotificationDropdown__title">Название</div>
            <div class="NotificationDropdown__time">9:20 AM</div>
          </div>
          <div class="NotificationDropdown__description">
            Описание... <br />...
          </div>
        </div>

        <a href="" class="NotificationDropdown__open-all">Открыть все...</a>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'NotificationsDropdown',
};
</script>

<style lang="scss" scoped>

#NotificationsDropdown__wrapper {
  position: fixed;
  margin-top: 445px;
  margin-left: 937px;

}
.NotificationsDropdown__body {
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 368px;
  background: linear-gradient(180deg, rgba(0, 8, 85, 0.6) 0%, #000855 100%);;
}

.NotificationsDropdown__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  margin-top: 20px;

}

.NotificationDropdown__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 215px;
  height: 70px;
  background: rgba(255, 254, 254, 0.7);
  opacity: 0.8;
  border-radius: 10px;
}

.NotificationDropdown__info {
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

.NotificationDropdown__description {
  width: 199px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.8);
}

.NotificationDropdown__open-all {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}


.NotificationsDropdown__close_figure {

}



</style>
