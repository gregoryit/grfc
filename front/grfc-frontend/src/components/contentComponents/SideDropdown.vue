<template>
  <div class="side-dropdown">
    <div class="first-layer">Форма 1.1</div>
    <div class="first-layer">Форма 1.1</div>
    <div class="first-layer">Форма 1.1</div>
    <div class="first-layer">Форма 1.1</div>
    <div class="first-layer">Форма 1.1</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SideDropdown',
  props: {
    closeModal: Function,
    checked: String,
  },
  mounted() {
    this.hideNav();
  },
  methods: {
    hideNav() {
      window.onclick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (
          !target.matches('.side-dropdown') &&
          !target.matches(`#${this.checked}`)
        ) {
          if (this.closeModal) {
            this.closeModal();
          }
        }
      };
    },
  },
  beforeUnmount() {
    this.hideNav();
  },
});
</script>

<style lang="scss" scoped>
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
