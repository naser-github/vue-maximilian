import { createRouter, createWebHistory } from "vue-router";
import store from '../store/index.js'
const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    component: () => import("../views/coaches/index.vue"),
  },
  {
    name: "coach_id",
    path: "/coaches/:id",
    component: () => import("../views/coaches/coachDetails.vue"),
    props: true,
    children: [
      {
        name: "contact",
        path: "contact",
        component: () => import("../views/request/contactCoaches.vue"),
      },
    ],
  },
  {
    name: "auth",
    path: "/user-auth",
    component: () => import("../views/auth/userAuth.vue"),
    meta: { requiresUnAuth: true },
  },
  {
    name: "register",
    path: "/register",
    component: () => import("../views/coaches/registerCoach.vue"),
    meta: { requiresAuth: true },
  },
  {
    name: "request",
    path: "/request",
    component: () => import("../views/request/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:notFound(.*)",
    redirect: "/coaches",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, from, next) {
  if(to.meta.requiresAuth && !store.getters.isAuth){
    next('/auth');
  }else if (to.meta.requiresUnAuth && store.getters.isAuth){
    next('/coaches');
  }else{
    next();
  }
});

export default router;
