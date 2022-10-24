import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import { createLoginRoute } from '../../modules/Login/Routes/LoginRoutes';
import { createIssuesRoute } from '../../modules/Issues/Routes/IssuesRoutes';
const getAllRoutes = (): RouteRecordRaw[] => {
  const routes: Array<RouteRecordRaw> = [
    createLoginRoute(),
    createIssuesRoute(),
  ];

  return routes;
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: getAllRoutes(),
});

export default router;
