import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/components/Main.vue';
import Auth from '@/views/Auth.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
