<template>
  <div class="w-[450px] p-8 space-y-4 nice-shadow">
    <form @submit.prevent="handleSubmit">
      <title-component title="Login" />
      <input-component v-model="formData.userName" label="Username" />
      <input-component
        v-model="formData.password"
        label="Password"
        type="password"
      />
      <div class="pt-4"><button-component text="Submit" /></div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import InputComponent from '../../../core/Components/InputComponent.vue';
import TitleComponent from '../../../core/Components/TitleComponent.vue';
import ButtonComponent from '../../../core/Components/ButtonComponent.vue';
import { useUserStore } from '../../../core/Store/userStore';
import ApiService from '../../../core/Axios/ApiService';
export default defineComponent({
  components: { InputComponent, TitleComponent, ButtonComponent },
  data() {
    return {
      userStore: useUserStore(),
      formData: {
        userName: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.userStore.username = this.formData.userName;
      this.userStore.password = this.formData.password;

      ApiService.init(
        import.meta.env.BASE_URL,
        `${this.formData.userName}:${this.formData.password}`
      );

      console.log('test');

      this.$router.push({ name: 'issues' });
    },
  },
});
</script>
<style scoped></style>
