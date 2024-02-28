// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue' // Import your component for the home route
import About from '../components/views/About.vue'; // Import your component for the about route

const routes = [
  { path: '/', component: Home },   
  { path: '/about', component: About }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
