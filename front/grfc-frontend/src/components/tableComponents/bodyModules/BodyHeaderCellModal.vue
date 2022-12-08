<template>
  <modal class="header__dropdown dropdown">
    <div class="dropdown__search">
      <label></label>
      <input type="text" class="dropdown__input" />
    </div>
    <div class="dropdown__sort">
      <img :src="require('@/assets/table/body_arrow.svg')" />
      <span class="dropdown__text">По возрастанию</span>
      <span class="dropdown__remove">x</span>
    </div>
    <div class="dropdown__sort">
      <img :src="require('@/assets/table/body_arrow.svg')" />
      <span class="dropdown__text">По убыванию</span>
      <span class="dropdown__remove">x</span>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BodyHeaderCellModal',
  methods: {
    hideNav() {
      window.onclick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (!target.matches('.header__dropdown')) {
          this.$emit('closeModal');
        }
      };
    },
  },
  beforeUnmount() {
    //this.hideNav();
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  z-index: 1000;
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  width: 98%;
  top: calc(100% + 2px);
  right: 2px;
  display: flex;
  flex-direction: column;
  padding: 2px;
  background: #fff;
  font-weight: 400;
  font-size: 12px;
  &__search {
    height: 25px;
  }
  &__sort {
    height: 25px;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &__input {
    width: 100%;
  }
  &__text {
    height: fit-content;
    color: #6d7095;
  }
  &__remove {
    margin-left: auto;
  }
}
</style>
