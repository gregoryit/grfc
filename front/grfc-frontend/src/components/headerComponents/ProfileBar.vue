<template>
  <div class="profile-bar__wrapper">
    <div class="profile-bar">
      <div class="profile-bar__notification">
        <button name="notification" type="button" class="notification__button">
          <figure class="notification__figure">
            <img
              src="../../assets/notification_btn.png"
              alt=""
              class="notification__figure__img"
            />
          </figure>
        </button>
      </div>

      <div class="profile-bar__user-photo">
        <figure class="user-photo__figure">
          <img
            src="../../assets/user_photo.png"
            alt=""
            class="user-photo__img"
          />
        </figure>
      </div>

      <div class="profile-bar__username">Синицин <br />Александр</div>

      <div class="profile-bar_arrow-down">
        <button
          name="arrow_down"
          type="button"
          class="profile-bar__arrow-down-button"
        >
          <figure class="profile-bar_arrow_down__figure">
            <img
              src="../../assets/arrow_down.png"
              alt=""
              class="profile-bar__arrow-down__img"
            />
          </figure>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProfileBar',
};
</script>

<style lang="scss" scoped>
.profile-bar__wrapper {
  width: 100%;
  max-width: 300px;
}

.profile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notification__button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.user-photo__img {
  width: 65px;
  height: 65px;
  background-color: #d9d9d9;
  border-radius: 35px;
}

.profile-bar__username {
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  color: #ffffff;
  font-weight: 400;
}

.profile-bar__arrow-down__img {
  width: 16px;
  height: 20px;
}

.profile-bar__arrow-down-button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
</style>
