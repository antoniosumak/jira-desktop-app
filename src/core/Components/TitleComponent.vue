<template>
  <h1 class="text-2xl font-bold">{{ title }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped></style>
