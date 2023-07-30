<script setup>
import axios from "axios";
import {onMounted, ref,watch} from "vue";
import {useRouter} from "vue-router";
const token = localStorage.getItem('token');
const router =useRouter()
const headers = {
  'Authorization': `Bearer ${token}`,
};
//personal information
const personalData=ref('')
const getPersonalInfo= async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_personal_info', { headers});
  if(response.status === 200){
    personalData.value=response.data.user
    // console.log(firstName)
  }
}
//professional qualification
  const ProfessionalData =ref('')
    const getPersonalQualification = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/list_professional_qualificaion', {headers});
      if (response.status === 200) {
        ProfessionalData.value = response.data.user
    }
  }
//vacancies
const vacancyname = ref('')
const getVacancies = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_vacancies', { headers});
  if(response.status === 200){
    vacancyname.value=response.data.data[0].name
  }
}
//Employment Experience
const experienceData = ref('')
const getPersonalExperience  = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_experience', {headers});
  if (response.status === 200) {
    experienceData.value = response.data.user
    // console.log(response.data.user[0].id)
  }
}
//other relevant courses
const courseData =ref('')
const getPersonalQualificationCourses  = async () => {
const response = await axios.get('http://127.0.0.1:8000/api/list_relevant_courses', {headers});
    if (response.status === 200) {
      courseData.value = response.data.user
    }
  }
  //Referees 
  const refereesData =ref('')
  const getPersonalReferee = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_referees', {headers});
  if (response.status === 200) {
    refereesData.value = response.data.user;
  }
}
//documents
const documentData=ref([])
const getPersonalDocuments = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_documents', {headers});
  if (response.status === 200) {
    documentData.value = response.data.user;
  }
}
//checkbox
const isChecked = ref(false);
watch(isChecked, () => {
    });
onMounted(()=>{
  getVacancies()
  getPersonalInfo()
  getPersonalQualification()
  getPersonalExperience()
  getPersonalQualificationCourses()
  getPersonalReferee()
  getPersonalDocuments()
})
</script>

<template>
<h1>My Application Details</h1>
  <p>Vacancy: <span>{{vacancyname}}</span></p>

  <table  class="m-3 table table-bordered">
      <thead>
        <th >My Personal details</th>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>phone</th>
          <th>address</th>
          <th>ID no.</th>
          <th>County</th>
          <th>Constituency</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in personalData" :key="data">
        <td>{{ data.firstName }}</td>
        <td>{{ data.lastName }}</td>
        <td>{{ data.gender }}</td>
        <td>{{ data.phone }}</td>
        <td>{{ data.address }}</td>
        <td>{{ data.idNo }}</td>
        <td>{{ data.county }}</td>
        <td>{{ data.constituency }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/information" class="text-decoration-none">Edit</router-link>
    </div>
  </div>



  <table  class="m-3 table table-bordered">
      <thead>
        <th >My Professional details</th>
        <tr>
          <th>Level</th>
          <th>Institution</th>
          <th>Course</th>
          <th>Award</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in ProfessionalData" :key="data">
        <td>{{ data.level }}</td>
        <td>{{ data.institution }}</td>
        <td>{{ data.course }}</td>
        <td>{{ data.award }}</td>
        <td>{{ data.startDate }}</td>
        <td>{{ data.endDate }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/qualification" class="text-decoration-none">Edit</router-link>
    </div>
  </div>
  <!-- Work Experience -->
  <table  class="m-3 table table-bordered">
      <thead>
        <th >My Work Experience</th>
        <tr>
          <th>Position</th>
          <th>Organization</th>
          <th>Nature of Work</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in experienceData" :key="data">
        <td>{{ data.position }}</td>
        <td>{{ data.organisation }}</td>
        <td>{{ data.workNature }}</td>
        <td>{{ data.startDate }}</td>
        <td>{{ data.endDate }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/experience" class="text-decoration-none">Edit</router-link>
    </div>
  </div>

<!-- other relevant work experience -->
<table  class="m-3 table table-bordered">
      <thead>
        <th >Other Relevant Courses</th>
        <tr>
          <th>Institution</th>
          <th>Course</th>
          <th>Certificate no.</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in courseData" :key="data">
        <td>{{ data.institution }}</td>
        <td>{{ data.course }}</td>
        <td>{{ data.certNo }}</td>
        <td>{{ data.startDate }}</td>
        <td>{{ data.endDate }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/courses" class="text-decoration-none">Edit</router-link>
    </div>
  </div>
  <!-- documents -->
  <table  class="m-3 table table-bordered">
      <thead>
        <th >Documents</th>
        <tr>
          <th>Document Name</th>
          <th>Description</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in documentData" :key="data">
        <td>{{ data.name }}</td>
        <td>{{ data.description }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/referees" class="text-decoration-none">Edit</router-link>
    </div>
  </div>
  <!-- refereees -->
  <table  class="m-3 table table-bordered">
      <thead>
        <th >Referees</th>
        <tr>
          <th>Full Name</th>
          <th>Occupation</th>
          <th>Email</th>
          <th>Phone </th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="data in refereesData" :key="data">
        <td>{{ data.fullName }}</td>
        <td>{{ data.occupation }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.phone }}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex mt-4 justify-content-around">
    <div class="">
      <router-link to="/applicant/referees" class="text-decoration-none">Edit</router-link>
    </div>
  </div>
  <div id="app">
    <label>
      <input type="checkbox" v-model="isChecked" />
      I hereby declare that all the above information is correct and accurate. 
    </label>
    <p>
      <button :disabled="!isChecked">Submit</button>
    </p>
  </div>
</template>
<style scoped>
</style>