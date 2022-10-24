<template>
  <div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from './core/Store/userStore';
export default defineComponent({
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  created() {
    if (this.userStore.username === '') {
      this.$router.push({ name: 'login' });
    }
  },
});
</script>
<style scoped></style>
