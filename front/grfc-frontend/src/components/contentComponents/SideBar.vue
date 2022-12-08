<template>
  <form class="side-bar" :class="{ hidden: $store.state.menu.isMenuActive }">
    <label
      v-for="button in buttons"
      :key="button.id"
      :for="button.name"
      @click="toggleSidedrop"
      :class="{ active: checked === button.name }"
    >
      <input type="checkbox" class="checkbox" :id="button.name" />
      <img
        :class="`${button.name}__img`"
        :src="require('@/assets' + button.imageSrc)"
        :alt="button.name"
      />
      <DropdownWindow
        v-if="checked === button.name"
        :closeModal="closeModal"
        :buttonClass="button.name"
      >
        <div class="side-dropdown">
          <div class="first-layer">Форма 1.1</div>
          <div class="first-layer">Форма 1.1</div>
          <div class="first-layer">Форма 1.1</div>
          <div class="first-layer">Форма 1.1</div>
          <div class="first-layer">Форма 1.1</div>
        </div>
      </DropdownWindow>
    </label>
  </form>
</template>

<script lang="ts">
import DropdownWindow from '../UI/DropdownWindow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentSideBar',
  components: {
    DropdownWindow,
  },
  data() {
    return {
      buttons: [
        {
          id: 1,
          name: 'search',
          imageSrc: '/header/search_btn.svg',
        },
        {
          id: 2,
          name: 'folder',
          imageSrc: '/menu/menu_folder.svg',
        },
        {
          id: 3,
          name: 'document',
          imageSrc: '/menu/menu_doc.svg',
        },
      ],
      checked: '',
    };
  },
  methods: {
    toggleSidedrop(event: Event) {
      const target = event.target as HTMLInputElement;
      if (this.checked === target.id) this.checked = '';
      else this.checked = target.id;
    },
    closeModal() {
      console.log(3);
      this.checked = '';
    },
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  &.hidden {
    display: none;
  }
  width: 60px;
  height: 100%;
  background-color: #000855;
  display: flex;
  flex-direction: column;
  & > * {
    min-height: 40px;
    width: 100%;
    background: none;
    border: 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}
.search__img {
  width: 20px;
}
.folder__img {
  width: 25px;
}
.document__img {
  width: 18px;
}
.checkbox {
  display: none;
}
.active {
  background-color: #93adf2;
}
.side-dropdown {
  width: 184px;
  height: 210px;
  background-color: #93adf2;
  position: absolute;
  display: flex;
  left: 55px;
  flex-direction: column;
  z-index: 1000;
  //top: 80px;
}
</style>
