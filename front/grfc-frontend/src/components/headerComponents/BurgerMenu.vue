<template>
  <div class="burger-menu__container">

    <div class="burger-menu">
      <button name="burger-menu__button" type="button" class="burger-menu__button">
        <span class="burger-menu__element"></span>
        <span class="burger-menu__element"></span>
        <span class="burger-menu__element"></span>
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

.burger-menu__container {
  margin-left: 38px;
  margin-top: 35px;
}

.burger-menu__button {
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

.burger-menu__element {
  display: block;
  width: 30px;
  height: 1.7px;
  background-color: #ffffff;
}

</style>
