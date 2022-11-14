<template>
  <Header />
  <Content />
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

<style scoped></style>
