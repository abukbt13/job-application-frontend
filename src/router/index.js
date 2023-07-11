import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/applicant/Dashboard.vue'
import PersonalInformation from '../views/applicant/PersonalInformation.vue'
import ProfessionalQualification from '../views/applicant/ProfessionalQualification.vue'
import RelevantCourses from '../views/applicant/RelevantCourses.vue'
import Documents from '../views/applicant/Documents.vue'
import Referees from '../views/applicant/Referees.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard,
    // children:{
    //   path:'/personalInformation',
    //   name:'personalInformation',
    //   component:PersonalInformation,
    // }
  },
  {
    path:'/personalInformation',
    name:'personalInformation',
    component:PersonalInformation,
  },
  {
  path:'/professionalQualification',
  name:'professionalQualification',
  component: ProfessionalQualification,
},
{
path:'/relevantCourses',
name:'relevantCourses',
component:RelevantCourses
},
{
  path:'/referees',
  name:'referees',
  component:Referees
},
{
  path:'/documents',
  name:'documents',
  component:Documents
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
