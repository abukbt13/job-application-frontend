import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/applicant/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
