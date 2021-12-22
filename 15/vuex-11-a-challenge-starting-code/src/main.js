import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)


app.component('base-badge', BaseBadge);

app.use(router);
app.use(store);

app.mount('#app');
