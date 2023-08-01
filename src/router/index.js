import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForgotPassword from '../views/auth/forgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
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
import Applicant from "@/views/dashboard/Applicant.vue";
import PersonalInformation from "@/views/applicant/PersonalInformation.vue";
import EmploymentExperience from "@/views/applicant/EmploymentExperience.vue";
import Testing from "@/views/testing/Testing.vue";

import Watch from "@/views/new_concepts/Watch.vue";
import FinishReset from "@/views/auth/FinishReset.vue";
import ApplicantDetails from "@/views/admin/ApplicantDetails";


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
      meta: {
        requiresEmploymentExperience: true,
      },
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
    path:'/reset-password',
    name:'reset-password',
    component:ResetPassword
  },
  {
    path:'/forgot-password',
    name:'forgot-password',
    component:ForgotPassword
  },

  {
    path:'/finishreset/:id',
    name:'finishreset',
    component:FinishReset
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:Dashboard,
    children: [

      {
        path: '/dashboard',
        name: 'user_applicant',
        component: Applicant_Users
      },
      {
        path: '/dashboard/short_listed',
        name: 'short_listed',
        component: Frontend
      },
      {
        path: '/dashboard/applicant_details/:id',
        name: 'applicant_detail',
        component: ApplicantDetails
      }
    ]
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/testing',
    name:'testing',
    component:Testing
  },
  {
    path:'/newconcept',
    component:Watch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresEmploymentExperience)) {
    const experienceComppleted = true;
    if (!experienceComppleted) {
      next({ name: 'experience' });
    } else {
      next();
    }
  } else {
    next();
  }
});





export default router
