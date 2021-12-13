import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Teamlist from './components/teams/TeamsList.vue';
import Userlist from './components/users/UsersList.vue';

const router = createRouter({
    
    history: createWebHistory(),
    routes: [
        {   path:'/teams', component:Teamlist   },
        {   path:'/users', component:Userlist   },
    ], 
});

const app = createApp(App)

app.use(router);

app.mount('#app');
