<script setup>
import axios from "axios";
import {onMounted, ref,watch} from "vue";
import {useRouter} from "vue-router";
const token = localStorage.getItem('token');
const router =useRouter()
const headers = {
  'Authorization': `Bearer ${token}`,
};
const progress = localStorage.getItem('progress')
const apiUrl = import.meta.env.VITE_APP_API_URL;
const redirect = async  (progress) => {
  if(progress>6){

  }
  else {
    await  router.push('/applicant/document')
  }
}
const user = JSON.parse(localStorage.getItem('user'));
//personal information
const personalData=ref('')
const getPersonalInfo= async () => {
  const response = await axios.get(apiUrl+'list_personal_info', { headers});
  if(response.status === 200){
    personalData.value=response.data.user
    // console.log(firstName)
  }
}
//professional qualification
  const ProfessionalData =ref('')
    const getPersonalQualification = async () => {
      const response = await axios.get(apiUrl+'list_professional_qualificaion', {headers});
      if (response.status === 200) {
        ProfessionalData.value = response.data.user
    }
  }
//vacancies
const vacancyname = ref('')
const getVacancies = async () => {
  const response = await axios.get(apiUrl/'list_vacancies', { headers});
  if(response.status === 200){
    vacancyname.value=response.data.data[0].name
  }
}
//Employment Experience
const experienceData = ref('')
const getPersonalExperience  = async () => {
  const response = await axios.get(apiUrl+'list_experience', {headers});
  if (response.status === 200) {
    experienceData.value = response.data.user
    // console.log(response.data.user[0].id)
  }
}
//other relevant courses
const courseData =ref('')
const getPersonalQualificationCourses  = async () => {
const response = await axios.get(apiUrl+'list_relevant_courses', {headers});
    if (response.status === 200) {
      courseData.value = response.data.user
    }
  }
  //Referees 
  const refereesData =ref('')
  const getPersonalReferee = async () => {
  const response = await axios.get(apiUrl+'list_referees', {headers});
  if (response.status === 200) {
    refereesData.value = response.data.user;
  }
}
//documents
const documentData=ref([])
const getPersonalDocuments = async () => {
  const response = await axios.get(apiUrl+'list_documents', {headers});
  if (response.status === 200) {
    documentData.value = response.data.user;
  }
}
//checkbox
const state = ref('')

const isChecked = ref(false);
watch(isChecked, () => {
    });

const comfirmed = async () =>{
  const response = await axios.get(apiUrl+'updateStatus',{headers});
if(response.data.status ==='success'){
  alert(response.data.message)
}
else{
  alert('failed there is an error that occured')
}
}


onMounted(()=>{
  getVacancies()
  getPersonalInfo()
  getPersonalQualification()
  getPersonalExperience()
  getPersonalQualificationCourses()
  getPersonalReferee()
  getPersonalDocuments()
  redirect(progress)
})
</script>

<template>
<h1 class="text-center">My Application Details</h1>
  <h3 class="text-center">Vacancy: <span class="text-primary">{{vacancyname}}</span></h3>

  <table  class="m-3 table table-bordered">
      <thead>
        <tr><th colspan="6" class="text-center">My Personal details</th></tr>
      </thead>
    <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>phone</th>
          <th>address</th>
          <th>County</th>
          <th>Constituency</th>
        </tr>


      <tr v-for="data in personalData" :key="data">
        <td>{{ data.firstName }}</td>
        <td>{{ data.lastName }}</td>
        <td>{{ data.phone }}</td>
        <td>{{ data.address }}</td>
        <td>{{ data.county }}</td>
        <td>{{ data.constituency }}</td>
      </tr>
    <tr>
      <td colspan="6" class="text-center">
        <router-link to="/applicant/information" class="text-decoration-none">View and edit</router-link>
      </td>
    </tr>
    </tbody>
  </table>



  <table  class="m-3 table table-bordered">
      <thead>
        <tr>
          <th colspan="6">My Professional details</th>
        </tr>
      </thead>
    <tbody>
        <tr>
          <th>Level</th>
          <th>Institution</th>
          <th>Course</th>
          <th>Award</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>

      <tr v-for="data in ProfessionalData" :key="data">
        <td>{{ data.level }}</td>
        <td>{{ data.institution }}</td>
        <td>{{ data.course }}</td>
        <td>{{ data.award }}</td>
        <td>{{ data.startDate }}</td>
        <td>{{ data.endDate }}</td>
      </tr>
    <tr>
      <td colspan="6" class="text-center">
        <router-link to="/applicant/qualification" class="text-decoration-none">view and Edit</router-link>

      </td>
    </tr>
    </tbody>
  </table>

  <!-- Work Experience -->
  <table  class="m-3 table table-bordered">
    <thead>
    <tr>
       <th colspan="5" class="text-center">My Work Experience</th>
     </tr>
    </thead>
       <tbody>
        <tr>
          <th>Position</th>
          <th>Organization</th>
          <th>Nature of Work</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      <tr v-for="data in experienceData" :key="data">
        <td>{{ data.position }}</td>
        <td>{{ data.organisation }}</td>
        <td>{{ data.workNature }}</td>
        <td>{{ data.startDate }}</td>
        <td>{{ data.endDate }}</td>
      </tr>
       <tr>
         <td colspan="5" class="text-center">
           <router-link to="/applicant/experience" class="text-decoration-none">View Edit</router-link>
         </td>
       </tr>
    </tbody>
  </table>
  <hr>

<!-- other relevant work experience -->
<table  class="m-3 table table-bordered">
      <thead>
      <tr>
        <th colspan="5"  class="text-center">Other Relevant Courses</th>
      </tr>
      </thead>
        <tbody>
          <tr>
            <th>Institution</th>
            <th>Course</th>
            <th>Certificate no.</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          <tr v-for="data in courseData" :key="data">
            <td>{{ data.institution }}</td>
            <td>{{ data.course }}</td>
            <td>{{ data.certNo }}</td>
            <td>{{ data.startDate }}</td>
            <td>{{ data.endDate }}</td>
          </tr>
        <tr>
          <td colspan="5" class="text-center">
            <router-link to="/applicant/courses" class="text-decoration-none">View andEdit</router-link>
          </td>
        </tr>
    </tbody>
  </table>

  <!-- documents -->
  <table  class="m-3 table table-bordered">
      <thead>
        <tr>
          <th colspan="2" class="text-center">Documents</th>
        </tr>
      </thead>
    <tbody>
        <tr>
          <th>Document Name</th>
          <th>Description</th>
        </tr>

      <tr v-for="data in documentData" :key="data">
        <td>{{ data.name }}</td>
        <td>{{ data.description }}</td>
      </tr>
    <tr>
      <td colspan="2" class="text-center">
      <router-link to="/applicant/referees" class="text-decoration-none">View and Edit</router-link>
    </td>
    </tr>
    </tbody>
  </table>

  <!-- refereees -->
  <table  class="m-3 table table-bordered">
      <thead>
      <tr>
        <th colspan="4" class="text-center">Referees</th>
      </tr>
      </thead>
    <tbody>
        <tr>
          <th>Full Name</th>
          <th>Occupation</th>
          <th>Email</th>
          <th>Phone </th>
        </tr>

      <tr v-for="data in refereesData" :key="data">
        <td>{{ data.fullName }}</td>
        <td>{{ data.occupation }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.phone }}</td>
      </tr>
    <tr>
      <td class="text-center" colspan="4">
        <router-link to="/applicant/referees" class="text-decoration-none">Edit</router-link>
      </td>
    </tr>
    </tbody>
  </table>

      <div id="" class="confirm justify-content-center align-items-center d-flex flex-column">
          <p class="text-uppercase">
            <input type="checkbox" v-model="isChecked" />
            I hereby declare that all the above information is correct and accurate.
          </p>

              <button @click="comfirmed" class="btn mt-2 w-50 btn-primary" :disabled="!isChecked">Submit</button>

      </div>
</template>
<style scoped>
</style>