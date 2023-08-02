<script setup>
import axios from "axios"
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router";


    const token = localStorage.getItem('token');
    const router =useRouter()
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
const progress = localStorage.getItem('progress')

const redirect = async  (progress) => {
  if(progress>3){
  }
  else {
    await  router.push('/applicant/courses')
  }
}
    const{position,organisation,workNature,startDate,endDate, baseUrl}={
     position:ref(''),
     organisation:ref(''),
     workNature:ref(''),
     startDate:ref(''),
     endDate:ref(''),
     baseUrl:'http://127.0.0.1:8000/api/'
    }
const user_id=ref('')
const getPersonalExperience  = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_experience', {headers});
  if (response.status === 200) {
    position.value = response.data.user[0].position
    organisation.value = response.data.user[0].organisation
    workNature.value = response.data.user[0].workNature
    startDate.value = response.data.user[0].startDate
    endDate.value = response.data.user[0].endDate
    user_id.value = response.data.user[0].id
    // console.log(response.data.user[0].id)
  }
}
    async function dopost(endpoint, data) {

      if(!user_id.value){
        try {
          const res = await axios.post(baseUrl + endpoint, data,{headers});
          if(res.status==200){
            localStorage.setItem('progress',5)
            alert('courses Info saving')
            await router.push('/applicant/referees')
          }
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      }
      else{
        try {
          const update_endpoint2='update_experience'
          const res = await axios.post(baseUrl + update_endpoint2, data,{headers});
          if(res.status==200){
            console.log(res)
            alert('success')
          }
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      }

      }
          const experienceComppleted=ref(false)
          const employmentExperience=async()=>{
          const formData=new FormData()
          formData.append('position',position.value)
          formData.append('organisation',organisation.value)
          formData.append('startDate',startDate.value)
          formData.append('endDate',endDate.value)
          formData.append('workNature',workNature.value)

        dopost('addEmplomentExperience',formData)
        experienceComppleted.value = ref(true)
            position.value = '';
            organisation.value = '';
            startDate.value = '';
            endDate.value = '';
            workNature.value = ''

    }
    onMounted(()=>{
      getPersonalExperience()
      redirect(progress)
    })
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
              <input type="text" v-model="organisation" required class="form-control" />
            </div>
            <div class="col">
              <label for="position" class="col-4 col-form-label">Position</label>
              <input type="text" v-model="position" required class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col">
              <label for="workNature" class="col-4 col-form-label">Nature of work</label>
              <input type="text" v-model="workNature" required class="w-50 form-control" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col">
              <label for="startDate" class="col-4 col-form-label">Start date</label>
              <input type="date" v-model="startDate" required class="form-control">
            </div>
            <div class="col">
              <label for="endDate" class="col-4 col-form-label">End date</label>
              <input type="date" v-model="endDate" required class="form-control">
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