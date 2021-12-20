import { createRouter, createWebHistory } from 'vue-router';

import Teamlist from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';

import Userlist from './components/users/UsersList.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // {   path:'/teams', component:Teamlist, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      //   component: Teamlist,
      components: { default: Teamlist, footer: TeamFooter },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: Userlist, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log('BeforeNext User');
        console.log(to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  linkActiveClass: 'activate',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log(to, from, next);
  next();
});

router.afterEach(function (to, from, next) {
  console.log('global afterEach');
  console.log(to, from, next);
  next();
});

export default router;