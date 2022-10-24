<template>
  <button class="py-2.5 px-1 bg-primary w-full text-white rounded">
    {{ text }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped></style>
