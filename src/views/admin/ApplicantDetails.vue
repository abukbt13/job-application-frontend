
<script setup>
import axios from "axios";
import {headers} from "@/composables/headers";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const personalinformation = ref([])
const personalqualification = ref([])

const route =useRoute()
const id = route.params.id
// alert(id)

const getPersonalInformation = async (id) => {
  const response = await axios.get(`http://127.0.0.1:8000/api/applicant/informations/${id}`, {headers});
  if (response.status === 200) {
    personalinformation.value = response.data;
  }
}
const getPersonalQualification = async (id) => {
  const response = await axios.get(`http://127.0.0.1:8000/api/applicant/qualification/${id}`, {headers});
  if (response.status === 200) {
    personalqualification.value = response.data;
  }
}
onMounted(()=>{
  getPersonalInformation(id)
  getPersonalQualification(id)
})

</script>
<template>
<h1 class="text-center" >Applicant Details</h1>
  <table class="table table-bordered table-hover">
    <thead>
    <tr>
      <th colspan="6" class="text-center">Personal Information</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td> First Name</td>
      <td>Last Name</td>
      <td>Phone</td>
      <td>Address </td>
      <td>County</td>
      <td> Constituency </td>
    </tr>
       <tr>
         <td>{{personalinformation.firstName}}</td>
         <td>{{personalinformation.lastName}}</td>
         <td>{{personalinformation.phone}}</td>
         <td>{{personalinformation.address}}</td>
         <td>{{personalinformation.county}}</td>
         <td>{{personalinformation.constituency}}</td>
       </tr>
    </tbody>
  </table>
  <br>
  <hr>
  <table class="table table-bordered table-hover">
    <thead>
    <tr>
      <th colspan="6" class="text-center">Personal Qualifications</th>
    </tr>
    </thead>
    <tbody>
<!--    {{personalqualification}}-->
    <tr>
      <td> Institution</td>
      <td>Level</td>
      <td>course</td>
      <td>Award </td>
    </tr>
       <tr>
         <td>{{personalqualification.institution}}</td>
         <td>{{personalqualification.level}}</td>
         <td>{{personalqualification.course}}</td>
         <td>{{personalqualification.award}}</td>
       </tr>
    </tbody>
  </table>


  <button class="btn w-50 btn-success">Select Applicant for Interview</button>
</template>



<style scoped>

</style>