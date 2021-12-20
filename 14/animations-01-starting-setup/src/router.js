import { createRouter, createWebHistory } from 'vue-router';

import AllUsers from './pages/AllUser.vue';
// import CourseGaols from './pages/CourseGaols.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      components: { default: AllUsers},
    },
  ],
});

export default router;
