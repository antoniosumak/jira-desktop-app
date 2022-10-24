<template>
  <section class="p-4 md:p-6 lg:p-8 h-screen w-full overflow-y-auto">
    <title-component v-if="title" :title="title" />
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TitleComponent from './TitleComponent.vue';
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  components: { TitleComponent },
});
</script>
<style scoped></style>
