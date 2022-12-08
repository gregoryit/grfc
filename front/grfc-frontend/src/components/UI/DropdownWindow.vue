<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DropdownWindow',
  props: {
    closeModal: Function,
    buttonClass: String,
  },
  mounted() {
    this.hideNav();
  },
  methods: {
    hideNav() {
      window.onclick = (event: Event) => {
        const target = event.target as HTMLElement;
        console.log(target.id, this.buttonClass);
        if (target.id) console.log(2);
        //console.log(!target.matches(`.${this.buttonClass}`));
        if (target.id !== this.buttonClass) {
          if (this.closeModal) {
            console.log(1);
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
