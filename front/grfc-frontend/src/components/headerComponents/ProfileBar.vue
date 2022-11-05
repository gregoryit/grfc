<template>
  <div class="container_ProfileBar">
    <div class="profile-bar">
      <button name="notification" type="button" class="notification_btn">
        <figure class="notification_btn">
          <img src="../../assets/notification_btn.png" alt="" class="notification_btn_png">
        </figure>
      </button>

      <figure class="user_photo">
        <img src="../../assets/user_photo.png" alt="" class="user_photo_img">
      </figure>

      <div class="username">Синицин Александр</div>

      <button name="arrow_down" type="button" class="arrow_down_btn">
        <figure class="arrow_down">
          <img src="../../assets/arrow_down.png" alt="" class="arrow_down_png">
        </figure>
      </button>

    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'ProfileBar',
};

</script>

<style lang="scss" scoped>

.container_ProfileBar {
  width: 408px;
  height: 65px;
  margin-top: 18px;
  margin-left: 5.5vw;

}

.profile-bar {
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
}

.notification_btn_png {
  width: 30px;
  height: 33px;
}

.notification_btn {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.user_photo_img {
  width: 65px;
  height: 65px;
  background-color: #D9D9D9;
  border-radius: 35px;
  margin-left: 40px;
}

.username {
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  color: #ffffff;
  font-weight: 400;
  margin-left: 15px;
}

.arrow_down_png {
  width: 16px;
  height: 20px;
  margin-top: 9px;
}

.arrow_down_btn {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin-left: 10px;
}

</style>
