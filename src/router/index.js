import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Home from "@/views/dashboard/Home.vue";
import Courses from "@/views/applicant/RelevantCourses.vue"
import document from "@/views/applicant/Documents.vue"
import Qualification from "@/views/applicant/ProfessionalQualification.vue"
import Confirmation from "@/views/applicant/Confirmation.vue"
import Referees from "@/views/applicant/Referees.vue"


const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeView
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard,
    children:[
    {
      path:'/dashboard',
      name:'home',
      component:Home,
    },

    {
      path:'/dashboard/courses',
      name:'courses',
      component:Courses,
    },

    {
      path:'/dashboard/qualification',
      name:'qualification',
      component:Qualification,
    },
    {
      path:'/dashboard/document',
      name:'document',
      component:document,
    },
    {
      path:'/dashboard/referees',
      name:'referees',
      component:Referees,
    },
    {
      path:'/dashboard/confirmation',
      name:'confirmation',
      component:Confirmation,
    }

    ]
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
