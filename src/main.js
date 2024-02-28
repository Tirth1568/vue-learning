import { createApp } from 'vue';
import App from './App.vue';
import router from './routing/router';

// Import Bootstrap CSS (you've already imported it)
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(router) // Use the router plugin
  .mount('#app');
