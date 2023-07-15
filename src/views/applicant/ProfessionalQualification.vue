<script setup>
import axios from "axios"
import {headers} from '@/composables/headers'
import {ref} from 'vue'
import {useRoute} from "vue-router"
const level =ref('')
      institution=ref('')
      course=ref('')
      award=ref('')
      startDate=ref('')
      endDate=ref('')
      user_id=11
      certNo=ref('')
      // dpost=await axios.post('http://127.0.0.1:8000/api/')

    formData=new FormData()
    formData.append('level',level.value)
    formData.append('institution',institution.value)
    formData.append('course',course.value)
    formData.append('award',course.award)
    formData.append('startDate',course.startDate)
    formData.append('endDate',course.endDate)
    formData.append('certNo',course.endDate)

    const addProfoessionalQualification=async()=>{
        const res=await axios.post('http://127.0.0.1:8000/api/addProfessional',formData,{headers})
        if(res.status==200){

        }
        // dopost('addProfressional',data)
    }
</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <h3 class="text-center text-primary">Professional Qualification</h3>
        <form>
          <div class="form-group row">
            <div class="col">
              <label for="level" class="col-form-label">Level of Education</label><br>
              <select class="form-control">
                <option value="">ewfc</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div class="col">
              <label for="course" class="col-4 col-form-label">Course</label>
              <select class="form-control" id="">
                <option value="">Select</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>
          </div>
            <div class="form-group row">
            <div class="col">
              <label for="institution" class="col-4 col-form-label">Institution Name</label>
              <input type="text" id="institution" class="form-control" />
            </div>
              <div class="col">
                <label for="award" class="col-4 col-form-label">Award</label><br>
                <select class="form-control" id="">
                  <option value="">Select</option>
                  <option value="First class">First Class</option>
                  <option value="Second Class">Second Class</option>
                  <option value="Pass">Pass</option>
                </select>
              </div>
          </div>


          <div class="form-group row">
            <div class="col">
              <label for="startDate" class="col-4 col-form-label">Start date</label>
              <input type="date" class="form-control">
            </div>
            <div class="col">
              <label for="endDate" class="col-4 col-form-label">End date</label>
              <input type="date" class="form-control">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button @submit="addProfessionalQualification()" class="mt-3 w-75 btn btn-success">Submit</button>
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