import { createRouter, createWebHistory } from 'vue-router'

import AllUsers from '../pages/AllUser.vue';
import CourseGaols from '../pages/CourseGaols.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AllUsers
  },
  {
    path: '/goals',
    name: 'goals',
    component: CourseGaols
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
