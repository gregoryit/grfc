<template>
  <div class="profile-bar__wrapper">
    <div class="profile-bar">
      <NotificationsDropdown
        v-if="isNotificationsOpen"
        @toggle="toggleNotifications"
      />
      <div class="profile-bar__notification" @click="toggleNotifications">
        <button name="notification" type="button" id="notification__button">
          <figure class="notification__figure">
            <img
              src="../../assets/header/notification_btn.svg"
              alt=""
              class="notification__figure__img"
            />
          </figure>
        </button>
      </div>
      <MenuDropdown v-if="isMenuOpen" @toggle="toggleMenu" @logOut="logOut" />
      <div class="profile-bar__user-photo">
        <figure class="user-photo__figure">
          <img
            src="../../assets/header/user_photo.png"
            alt=""
            class="user-photo__img"
          />
        </figure>
      </div>
      <div class="profile-bar__username">Синицин Александр</div>
      <div class="profile-bar_arrow-down" @click="toggleMenu">
        <button
          name="arrow_down"
          type="button"
          class="profile-bar__arrow-down-button"
        >
          <figure class="profile-bar_arrow_down__figure">
            <img
              src="../../assets/menu/arrow_down.svg"
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
import NotificationsDropdown from '@/components/headerComponents/NotificationsDropdown.vue';
import MenuDropdown from '@/components/headerComponents/ProfileDropdown.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    NotificationsDropdown,
    MenuDropdown,
  },
  name: 'ProfileBar',
  data() {
    return {
      isNotificationsOpen: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleNotifications() {
      this.isNotificationsOpen = !this.isNotificationsOpen;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logOut() {
      this.$router.push('/auth');
    },
  },
});
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

#notification__button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
.notification__figure__img {
  width: 25px;
}

.user-photo__img {
  width: 45px;
  height: 45px;
  background-color: #d9d9d9;
  border-radius: 35px;
}

.profile-bar__username {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
}

.profile-bar__arrow-down__img {
  width: 14px;
  height: 12px;
}

.profile-bar__arrow-down-button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
</style>
