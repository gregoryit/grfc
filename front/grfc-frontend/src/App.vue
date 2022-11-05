<template>
  <Header />
  <Content />
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,

  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 1440px;
  margin: auto;
}
</style>
