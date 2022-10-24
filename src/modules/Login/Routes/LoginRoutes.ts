import { RouteRecordRaw } from 'vue-router';
import Index from '../Pages/Index.vue';

export function createLoginRoute(): RouteRecordRaw {
  return {
    name: 'login',
    path: '/login',
    component: Index,
    meta: {
      showInNavigation: false,
    },
  };
}
