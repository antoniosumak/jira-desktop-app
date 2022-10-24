import { RouteRecordRaw } from 'vue-router';
import Index from '../Pages/Index.vue';

export function createIssuesRoute(): RouteRecordRaw {
  return {
    name: 'issues',
    path: '/issues',
    component: Index,
    meta: {
      showInNavigation: false,
    },
  };
}
