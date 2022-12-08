import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/Main.vue'),
    children: [
      {
        path: '/',
        name: 'tableBody',
        component: () => import('@/components/tableComponents/TableBody.vue'),
      },
      {
        path: 'filter',
        name: 'mainFilters',
        component: () => import('@/components/MainFilters.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/Auth.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
