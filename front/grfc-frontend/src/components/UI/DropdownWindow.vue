<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DropdownWindow',
  props: {
    closeModal: Function,
    buttonId: String,
  },
  mounted() {
    this.hideDropdown();
  },
  methods: {
    hideDropdown() {
      window.onclick = (event: Event) => {
        const target = event.target as HTMLElement;
        console.log(target, this.buttonId, 2);
        if (target.id !== this.buttonId) {
          if (this.closeModal) {
            this.closeModal();
          }
        }
      };
    },
  },
  beforeUnmount() {
    this.hideDropdown();
  },
});
</script>
