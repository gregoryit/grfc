<template>
  <div class="main__container">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './MainHeader.vue';
import Content from './MainContent.vue';
export default defineComponent({
  name: 'AppMain',
  components: {
    Header,
    Content,
  },
});
</script>

<style scoped lang="scss">
.main__container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: 100%;
}
</style>
