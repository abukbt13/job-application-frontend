<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

import {authorize} from "@/composables/authorize";
const {authUser} =authorize()
import Swal from 'sweetalert2'
const vacancies=ref(null)
const name = ref('')
const vacancyname = ref('')
const description = ref('')
const token = localStorage.getItem('token');
const router =useRouter()
const headers = {
  'Authorization': `Bearer ${token}`,
};
const getVacancies = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_vacancies', { headers});
  if(response.status === 200){
    vacancyname.value=response.data.data[0].name

    console.log(vacancyname)
  }

}

const applyFrontend = async () =>{
  name.value ="Frontend";
  description.value ="Creating Endpoints api for our frontend applications.Testing of endpoints to ensure authentications are met.";
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('description', description.value)

  if (vacancyname.value === '') {
    const response = await axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})
    Swal.fire(
        'Good job!',
        'You have chosed a vacancy!',
        'success'
    ).then(() => {
      localStorage.setItem('progress',1)
      router.push('/applicant/information')
        }
    )
  }
  else {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your vacancy will be updated",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update vacancy!'
    }).then((result) => {
      if (result.isConfirmed) {
        const response =  axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})

        Swal.fire(
            'Success!',
            'Your vacancy have been updated .',
            'success'
        ).then(() => {
              localStorage.setItem('progress',1)
              router.push('/applicant/information')
            }
        )
      }
    })
  }

}
const applyBackend = async () =>{
  name.value ="Backend";
  description.value ="Creating of frontend app that are very user friendly ";
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('description', description.value)
  if (vacancyname.value === '') {
    const response = await axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})
    Swal.fire(
        'Good job!',
        'You have chosed a vacancy!',
        'success'
    ).then(() => {
      localStorage.setItem('progress',1)
      router.push('/applicant/information')
        }
    )
  }
  else {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your vacancy will be updated",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update vacancy!'
    }).then((result) => {
      if (result.isConfirmed) {
        const response =  axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})

        Swal.fire(
            'Success!',
            'Your vacancy have been updated .',
            'success'
        ).then(() => {
              router.push('/applicant/information')
            }
        )
      }
    })
  }
}
const applyDevops = async () =>{
  name.value ="Devops";
  description.value ="Hosting and maintaining websites in different host and maintaining them. ";
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('description', description.value)
  if (vacancyname.value === '') {
    const response = await axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})
    Swal.fire(
        'Good job!',
        'You have chosed a vacancy!',
        'success'
    ).then(() => {
      localStorage.setItem('progress',1)
      router.push('/applicant/information')
        }
    )
  }
  else {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your vacancy will be updated",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update vacancy!'
    }).then((result) => {
      if (result.isConfirmed) {
        const response =  axios.post('http://127.0.0.1:8000/api/add_vacancy', formData, {headers})

        Swal.fire(
            'Success!',
            'Your vacancy have been updated .',
            'success'
        ).then(() => {
              router.push('/applicant/information')
            }
        )
      }
    })
  }
}

onMounted(()=>{
  authUser()
  getVacancies()
})

</script>

<template>  
  <div class="row" id="jobs">
    <div class="col col-4">
      <div class="card ms-3">
        <div class="card-header  bg-dark text-white text-center">
          Frontend Developer
        </div>
        <div class="card-body">
          <h3 class="card-title text-center text-primary">Description</h3>
          <p class="card-text">
            Creating Endpoints api for our frontend applications.Testing of endpoints to ensure authentications are met.
          </p>
          <h5 class=" text-center text-primary">Requirements</h5>
          <ul>
            <li>He/she should know how to code with php and laravel framework</li>
            <li>He/she should know how to use version control and have interacted with github or gitlab</li>
            <li>He/she should have knowledge of linux Operating system</li>
          </ul>
          <div class="d-flex justify-content-center">
            <form @submit.prevent="applyFrontend">
              <input type="text" v-model="name" hidden>
              <input type="text" v-model="description" hidden>
              <button type="submit" class="btn btn-danger">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-4">
      <div class="card">
        <div class="card-header  bg-dark text-white text-center">
          Backend developer
        </div>
        <div class="card-body">
          <h5 class="card-title text-center text-primary">Description</h5>
          <p class="card-text ">
            Creating of frontend app that are very user friendly
          </p>
          <h5 class=" text-center text-primary">Requirements</h5>
          <ul>
            <li>He/she should know how to code with javascript and vue js framework framework</li>
            <li>He/she should know how to use version control and have interacted with github or gitlab</li>
            <li>He/she should have knowledge of linux Operating system</li>
            <li>He/she should know css and bootstrap well</li>
          </ul>
          <div class="d-flex justify-content-center">
            <form @submit.prevent="applyBackend">
              <input type="text" v-model="name" hidden>
              <input type="text" v-model="description" hidden>
              <button type="submit" class="btn btn-danger">Apply bd Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-4">
      <div class="card me-2">
        <div class="card-header  bg-dark text-white text-center">
          Dev Ops  Engineer
        </div>
        <div class="card-body">
          <h5 class="card-title text-primary text-center">Description</h5>
          <p class="card-text">
            Hosting and maintaining websites in different host and maintaining them.
          </p>
          <h5 class=" text-center text-primary">Requirements</h5>
          <ul>
            <li>He/she should be familiar with Aws </li>
            <li>He/she should know how to use version control and have interacted with github or gitlab</li>
            <li>He/she should have knowledge of linux Operating system</li>
          </ul>
          <div class="d-flex justify-content-center">
            <form @submit.prevent="applyDevops">
              <input type="text" v-model="name" hidden>
              <input type="text" v-model="description" hidden>
              <button type="submit" class="btn btn-danger">Apply Now</button>
            </form>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant" class="text-decoration-none"></router-link>
    </div>
    <div class="">
      <router-link to="/applicant/information" class="text-decoration-none">Next</router-link>
    </div>
  </div>

</template>

<style scoped>

</style>