<script setup>
import {ref} from "vue";
import axios from "axios";

const name = ref('')
const description = ref('')

const appplyNow = async () =>{
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('description', description.value)
  const response = await axios.post('http://localhost:3000/api/v1/posts', {headers})
  if(response.status===200){

  }
}
</script>

<template>
  <div class="row" id="jobs">
    <div class="col col-4">
      <div class="card ms-3">
        <div class="card-header  bg-dark text-white text-center">
          Backend Developer
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
            <form @submit.prevent="applyNow">
              <input type="text" v-model="name" value="Frontend" hidden="">
              <input
                  type="text" v-model="description"
                  value="Creating Endpoints api for our frontend applications.Testing of endpoints to ensure authentications are met."
                  hidden="">
              <button type="submit" class="btn btn-danger">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-4">
      <div class="card">
        <div class="card-header  bg-dark text-white text-center">
          Frontend developer
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
            <a href="register" class="btn btn-danger">Apply Now</a>
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
          </ul><div class="d-flex justify-content-center">
          <a href="register" class="btn btn-danger">Apply Now</a>
        </div>

        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="">
    <div class="col d-flex">
      <div class="">abraham</div>
      <div class="">abraham</div>
    </div>
  </div>
</template>

<style scoped>

</style>