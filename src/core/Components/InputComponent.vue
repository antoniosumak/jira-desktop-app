<template>
  <div class="flex flex-col space-y-2">
    <label :for="name">{{ label }}</label>
    <input
      class="p-2 leading-normal w-full border text-dark bg-white font-sans rounded text-left appearance-none relative outline-none focus:border-primary shadow-sm"
      :value="modelValue"
      :type="type ?? 'text'"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
});
</script>
<style scoped></style>
