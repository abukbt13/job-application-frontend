import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Applicant_Users from '../views/admin/Applicants.vue'
import Home from "@/views/dashboard/Home.vue";
import Courses from "@/views/applicant/RelevantCourses.vue"
import document from "@/views/applicant/Documents.vue"
import Qualification from "@/views/applicant/ProfessionalQualification.vue"
import Confirmation from "@/views/applicant/Confirmation.vue"
import Referees from "@/views/applicant/Referees.vue"
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Frontend from "@/views/admin/Shortlisted/Frontend.vue";
import Vacancies from "@/views/admin/Vacancies.vue";
import Applicant from "@/views/dashboard/Applicant.vue";
import Vacancy from "@/views/applicant/Vacancy.vue";
import PersonalInformation from "@/views/applicant/PersonalInformation.vue";
import EmploymentExperience from "@/views/applicant/EmploymentExperience.vue";


const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeView
  },
  {
    path:'/applicant',
    name:'applicant',
    component:Applicant,
    children:[
    {
      path:'',
      name:'home',
      component:Home,
    },
    {
      path:'/applicant/information',
      name:'applicant_info',
      component:PersonalInformation,
    },

    {
      path:'/applicant/courses',
      name:'courses',
      component:Courses,
    },

    {
      path:'/applicant/qualification',
      name:'qualification',
      component:Qualification,
    },
    {
      path:'/applicant/document',
      name:'document',
      component:document,
    },
    {
      path:'/applicant/referees',
      name:'referees',
      component:Referees,
    },
    {
      path:'/applicant/confirmation',
      name:'confirmation',
      component:Confirmation,
    },
    {
      path:'/applicant/experience',
      name:'experience',
      component:EmploymentExperience,
    }

    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard,
    children: [
      {
        path: '/dashboard',
        name: 'vacancy',
        component: Vacancies
      },
      {
        path: '/dashboard/applicant',
        name: 'user_applicant',
        component: Applicant_Users
      },
      {
        path: '/dashboard/short_listed',
        name: 'short_listed',
        component: Frontend
      }
    ]
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
