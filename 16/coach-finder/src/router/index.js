import { createRouter, createWebHistory } from "vue-router";

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
    name: "register",
    path: "/register",
    component: () => import("../views/coaches/registerCoach.vue"),
  },
  {
    name: "request",
    path: "/request",
    component: () => import("../views/request/index.vue"),
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

export default router;
