import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

import BaseBadge from "./components/ui/baseBadge.vue";
import BaseButton from "./components/ui/baseButton.vue";
import BaseCard from "./components/ui/baseCard.vue";
import BaseDialogue from "./components/ui/baseDialogue.vue";
import BaseSpinner from "./components/ui/baseSpinner.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialogue", BaseDialogue);
app.component("base-spinner", BaseSpinner);

app.use(router);
app.use(store);
app.mount("#app");
