import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons

// Add all icons to the library so you can use them in your components
library.add(fas);

const app = createApp(App);

// Register the component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount("#app");