<template>
  <div
    class="side-bar"
    :class="{ hidden: $store.state.menu.isMenuActive }"
  ></div>
</template>

<script lang="ts">
export default {
  name: 'ContentSideBar',
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 60px;
  height: 100%;
  background-color: #000855;
}
.side-bar.hidden {
  display: none;
}
</style>
