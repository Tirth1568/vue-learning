// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue' // Import your component for the home route
import About from '../components/views/About.vue'; // Import your component for the about route
import registrationForm from '../components/views/RegistrationForm.vue'
const routes = [
  { path: '/', component: Home },   
  { path: '/about', component: About },
  { path: '/registrationform', component: registrationForm }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
