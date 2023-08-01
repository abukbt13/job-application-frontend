<script setup>

import axios from "axios";
import {headers} from "@/composables/headers";
import {onMounted, ref} from "vue";
const users = ref([])
const allApplicants = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/applicant/all', {headers});
  if (response.status === 200) {
    users.value = response.data;
  }
}
onMounted(()=>{
  allApplicants()
})
</script>

<template>
  <h2 class="text-center">All applicants</h2>
  <table class="m-2 table table-bordered">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.status }}</td>
      <td>{{ user.email }}</td>
      <td><router-link class="btn btn-primary" :to="`dashboard/applicant_details/${user.id}`">View details</router-link></td>
    </tr>


    </tbody>
  </table>
</template>

<style scoped>

</style>