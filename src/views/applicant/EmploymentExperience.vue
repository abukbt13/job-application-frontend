<script setup>
import axios from "axios"
import {ref} from 'vue'
import {useRouter} from "vue-router";


    const token = localStorage.getItem('token');
    const router =useRouter()
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    const position =ref('')
    const organisation=ref('')
    const workNature=ref('')
    const startDate=ref('')
    const endDate=ref('')
          // dpost=await axios.post('http://127.0.0.1:8000/api/')
          const employmentExperience=async()=>{
          const formData=new FormData()
          formData.append('position',position.value)
          formData.append('organisation',organisation.value)
          formData.append('startDate',startDate.value)
          formData.append('endDate',endDate.value)
          formData.append('workNature',workNature.value)

            //comment
        const res=await axios.post('http://127.0.0.1:8000/api/addEmplomentExperience',formData,{headers})
        if(res.status==200){
            alert('success')
        }
        // dopost('addProfressional',data)
    }
</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <h3 class="text-center text-primary">Professional Experience</h3>
        <form @submit.prevent="employmentExperience">
          <div class="form-group row">
            <div class="col">
              <label for="organisation" class="col-4 col-form-label">Organisation</label>
              <input type="text" v-model="organisation" class="form-control" />
            </div>
            <div class="col">
              <label for="position" class="col-4 col-form-label">Position</label>
              <input type="text" v-model="position" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col">
              <label for="workNature" class="col-4 col-form-label">Nature of work</label>
              <input type="text" v-model="workNature" class="w-50 form-control" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col">
              <label for="startDate" class="col-4 col-form-label">Start date</label>
              <input type="date" v-model="startDate" class="form-control">
            </div>
            <div class="col">
              <label for="endDate" class="col-4 col-form-label">End date</label>
              <input type="date" v-model="endDate" class="form-control">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="mt-3 w-75 btn btn-success">Submit</button>
          </div>


        </form>
        <div class="d-flex mt-4 justify-content-around">
          <div class="">
            <router-link to="/applicant/information" class="text-decoration-none">Previous</router-link>
          </div>
          <div class="">
            <router-link to="/applicant/courses" class="text-decoration-none">Next</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </section>
</template>

<style scoped>

</style>