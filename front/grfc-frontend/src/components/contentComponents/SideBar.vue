<template>
  <form class="side-bar" :class="{ hidden: $store.state.menu.isMenuActive }">
    <label
      for="search"
      @click="toggleSidedrop"
      :class="{ active: checked === 'search' }"
    >
      <input type="checkbox" class="checkbox" id="search" />
      <img
        class="search__img"
        src="@/assets/header/search_btn.svg"
        alt=""
        @click.stop
      />
      <SideDropdown
        v-if="checked === 'search'"
        :closeModal="closeModal"
        :checked="checked"
      />
    </label>

    <label
      for="folder"
      @click="toggleSidedrop"
      :class="{ active: checked === 'folder' }"
    >
      <input type="checkbox" class="checkbox" id="folder" />
      <img
        class="folder__img"
        src="@/assets/menu/menu_folder.svg"
        alt=""
        @click.stop
      />
      <SideDropdown
        v-if="checked === 'folder'"
        :closeModal="closeModal"
        :checked="checked"
      />
    </label>

    <label
      for="document"
      @click="toggleSidedrop"
      :class="{ active: checked === 'document' }"
    >
      <input type="checkbox" class="checkbox" id="document" />
      <img
        class="document__img"
        src="@/assets/menu/menu_doc.svg"
        alt=""
        @click.stop
      />
      <SideDropdown
        v-if="checked === 'document'"
        :closeModal="closeModal"
        :checked="checked"
      />
    </label>
  </form>
</template>

<script lang="ts">
import SideDropdown from './SideDropdown.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentSideBar',
  components: {
    SideDropdown,
  },
  data() {
    return {
      checked: '',
    };
  },
  methods: {
    toggleSidedrop(event: Event) {
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
</style>
