import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/components/Main.vue';
import Auth from '@/views/Auth.vue';
import MainFilters from '@/components/MainFilters.vue';
import TableBody from '@/components/tableComponents/TableBody.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/',
        component: TableBody,
      },
      {
        path: 'filter',
        component: MainFilters,
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
