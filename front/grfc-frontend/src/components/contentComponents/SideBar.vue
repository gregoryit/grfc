<template>
  <form class="side-bar" :class="{ hidden: $store.state.menu.isMenuActive }">
    <label
      v-for="button in buttons"
      :key="button.id"
      :for="button.name"
      :class="{
        active: checked === button.name,
        [button.name + '__img']: true,
      }"
    >
      <input
        type="radio"
        class="checkbox"
        :id="button.name"
        @click="openSidedrop"
        v-model="checked"
      />
      <DropdownWindow
        v-if="checked === button.name"
        :closeModal="closeModal"
        :buttonId="button.name"
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
        { id: 1, name: 'search' },
        { id: 2, name: 'folder' },
        { id: 3, name: 'document' },
      ],
      checked: '',
    };
  },
  methods: {
    openSidedrop(event: Event) {
      const target = event.target as HTMLInputElement;
      this.checked = target.id;
    },
    closeModal() {
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
  background-image: url('../../assets/header/search_btn.svg');
  background-size: 20px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.folder__img {
  background-image: url('../../assets/menu/menu_folder.svg');
  background-size: 25px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.document__img {
  background-image: url('../../assets/menu/menu_doc.svg');
  background-size: 18px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.checkbox {
  width: 100%;
  height: 100%;
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
