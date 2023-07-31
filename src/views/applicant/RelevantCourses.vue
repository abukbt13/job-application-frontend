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
  if(progress>2){
  }
  else {
    await  router.push('/applicant/qualification')
  }
}
      const level =ref('')
      const cousedata =ref('')
      const institution=ref('')
      const course=ref('')
      const award=ref('')
      const startDate=ref('')
      const endDate=ref('')
      const certNo=ref('')
      const user_id=ref('')
      const getPersonalQualificationCourses  = async () => {
       const response = await axios.get('http://127.0.0.1:8000/api/list_relevant_courses', {headers});
        if (response.status === 200) {
          cousedata.value = response.data.user
        }
      }

    const relevantCourses=async()=>{
       const formData=new FormData()
          formData.append('institution',institution.value)
          formData.append('course',course.value)
          formData.append('startDate',startDate.value)
          formData.append('endDate',endDate.value)
          formData.append('certNo',certNo.value)

  
        const res=await axios.post('http://127.0.0.1:8000/api/addOtherCourse',formData,{headers})
        if(res.status==200){

          localStorage.setItem('progress',4)
          alert('courses Info saving')
          await router.push('/applicant/experience')

        }
    }
    onMounted(()=>{
      getPersonalQualificationCourses()
      redirect(progress)
    })
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
<!--        {{cousedata}}-->
        <table class="table table-bordered">
          <thead>
          <tr>
            <th colspan="4">List of My Reference</th>
          </tr>
          <tr>
            <th>Institution Name</th>
            <th>Course Name</th>
            <th>Certificate No</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="data in cousedata" :key="data">
            <td>{{data.institution}}</td>
            <td>{{data.course}}</td>
            <td>{{data.certNo}}</td>
            <td>{{data.startDate}}</td>
            <td>{{data.endDate}}</td>

          </tr>
          </tbody>
        </table>
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