<script setup>
import axios from "axios"
import {ref} from 'vue'
import {useRouter} from "vue-router";


    const token = localStorage.getItem('token');
    const router =useRouter()
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    const level =ref('')
    const institution=ref('')
    const course=ref('')
    const award=ref('')
    const startDate=ref('')
    const endDate=ref('')
          // dpost=await axios.post('http://127.0.0.1:8000/api/')
          const relevantCourses=async()=>{
          const formData=new FormData()
          formData.append('institution',institution.value)
          formData.append('course',course.value)
          formData.append('startDate',course.startDate)
          formData.append('endDate',course.endDate)
          formData.append('certNo',course.endDate)

  
        const res=await axios.post('http://127.0.0.1:8000/api/addOtherCourse',formData,{headers})
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

        <h3 class="text-center text-primary">Other Relevant Courses</h3>
        <form @submit.prevent="relevantCourses()" >
          <div class="form-group row">
            <div class="col">
              <label for="institution" class="col-4 col-form-label">Institution Name</label>
              <input  type="text" v-model="institution" id="institution" class="form-control" />
            </div>
            <div class="col">
              <label for="course" class="col-4 col-form-label">Course  Name</label>
              <input type="text" v-model="course" id="institution" class="form-control" />
            </div>
          </div>
          <div class="form-group row">

            <div class="col">
              <label for="certNo" class="col-4 col-form-label">Certificate Number</label><br>
              <input type="text" v-model="certNo" id="institution" class="form-control" />
            </div>
            <div class="col">
              <label for="startDate" class="col-4 col-form-label">Start date</label>
              <input type="date" v-model="startDate" class="form-control">
            </div>
          </div>


          <div class="form-group row">
            <div class="col">
              <label for="endDate" class="col-4 col-form-label">End date</label>
              <input type="date" v-model="endDate" class=" w-50 form-control">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="mt-3 w-75 btn btn-success">Submit</button>
          </div>


        </form>
        <div class="d-flex mt-4 justify-content-around">
          <div class="">
            <router-link to="/applicant/qualification" class="text-decoration-none">Previous</router-link>
          </div>
          <div class="">
            <router-link to="/applicant/experience" class="text-decoration-none">Next</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </section>
</template>

<style scoped>

</style>