<template>
  <RouterView></RouterView>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  max-width: 1440px;
  margin: auto;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
