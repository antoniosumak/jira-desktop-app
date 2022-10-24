<template>
  <main-section>
    <center-component>
      <login-card />
    </center-component>
  </main-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainSection from '../../../core/Components/MainSection.vue';
import CenterComponent from '../../../core/Components/CenterComponent.vue';
import LoginCard from '../Components/LoginCard.vue';
export default defineComponent({
  components: { MainSection, CenterComponent, LoginCard },
});
</script>
<style scoped></style>
