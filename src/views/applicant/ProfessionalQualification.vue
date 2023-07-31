<script setup>
import axios from "axios"
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router";
import Swal from "sweetalert2";

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
  const user_id=ref('')

const progress = localStorage.getItem('progress')

const redirect = async  (progress) => {
  if(progress>1){
  }
  else {
    await  router.push('/applicant/information')
  }
}

    const getPersonalQualification = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/list_professional_qualificaion', {headers});
      if (response.status === 200) {
        level.value = response.data.user[0].level
        institution.value = response.data.user[0].institution
        course.value = response.data.user[0].course
        award.value = response.data.user[0].award
        startDate.value = response.data.user[0].start_date
        endDate.value = response.data.user[0].end_date
        user_id.value=response.data.user[0].id
        console.log(response.data.user[0])
      }
    }
    const addProfoessionalQualification=async()=>{
      const formData=new FormData()
            formData.append('level',level.value)
            formData.append('institution',institution.value)
            formData.append('course',course.value)
            formData.append('award',award.value)
            formData.append('startDate',startDate.value)
            formData.append('endDate',endDate.value)
            formData.append("user_id", user_id.value);


            if(!user_id.value) {
              const ressponse = await axios.post('http://127.0.0.1:8000/api/addProfessional',formData,{ headers })
              if(ressponse.status==200){
                alert('Personal Info Saved')
              }
            }
            else{
              alert('bbhbp')
              const ressponse = await axios.post('http://127.0.0.1:8000/api/update_ProfessionalQualification',formData,{ headers })
              if(ressponse.status==200){
                 Swal.fire({
                        title: 'Success submitting ?',
                        text: "You have successfully added your personal qualification",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'continue'
                  }).then((result) => {
                      //  router.push('/applicant/courses')
                  })              
      }
              else{
                alert('Not found')
              }
            }
        // const res=await axios.post('http://127.0.0.1:8000/api/addProfessional',formData,{headers})
        // if(res.status==200){
        //           Swal.fire({
        //                 title: 'Success submitting ?',
        //                 text: "You have successfully added your personal qualification",
        //                 icon: 'success',
        //                 confirmButtonColor: '#3085d6',
        //                 confirmButtonText: 'continue'
        //           }).then((result) => {
        //                router.push('/applicant/courses')
        //           })
        // }
    }

    onMounted(()=> {
      redirect(progress)
      getPersonalQualification()
    })
</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <h3 class="text-center text-primary">Professional Qualification</h3>
        <form @submit.prevent="addProfoessionalQualification">
          <div class="form-group row">
            <div class="col">
              <label for="level" class="col-form-label">Level of Education</label><br>
              <select v-model="level" class="form-control">
                <option value="">select</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div class="col">
              <label for="course" class="col-4 col-form-label">Course</label>
              <select v-model="course" class="form-control" id="">
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
              <input v-model="institution" type="text" id="institution" class="form-control" />
            </div>
              <div class="col">
                <label for="award" class="col-4 col-form-label">Award</label><br>
                <select v-model="award" class="form-control" id="">
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