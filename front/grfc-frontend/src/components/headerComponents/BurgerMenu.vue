<template>
  <div class="container_BurgerMenu">
    <div class="burger-menu">
      <button name="btn_burger_menu" type="button" class="btn_burger_menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'BurgerMenu',
};

</script>

<style lang="scss" scoped>

.container_BurgerMenu {
  margin-left: 38px;
  margin-top: 35px;
}

.btn_burger_menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  outline: 0 !important;
  border: 0;
  background-color: transparent;
  cursor: pointer;

}

.line {
  display: block;
  width: 30px;
  height: 1px;
  background-color: #ffffff;
}

</style>
