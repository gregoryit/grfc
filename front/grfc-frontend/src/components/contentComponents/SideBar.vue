<template>
  <div class="side-bar" :class="{ hidden: $store.state.menu.isMenuActive }">
    <button class="search">
      <img class="search__img" src="@/assets/header/search_btn.svg" alt="" />
    </button>
    <button class="folder">
      <img class="folder__img" src="@/assets/menu/menu_folder.svg" alt="" />
    </button>
    <button class="document">
      <img class="document__img" src="@/assets/menu/menu_doc.svg" alt="" />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContentSideBar',
};
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
  gap: 18px;
  & > * {
    background: none;
    border: 0;
  }
  .search {
    margin-top: 10px;
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

</style>
