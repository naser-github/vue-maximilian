import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FormContact from './components/Form.vue';

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('form-contact', FormContact);
app.mount('#app');