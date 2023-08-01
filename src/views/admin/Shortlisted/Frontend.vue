<script setup>

</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link class="nav-link active" to="dashboard/short_listed" aria-current="page" href="">All</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="dashboard/frontend" >Frontend</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="dashboard/frontend" >Backend</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="dashboard/frontend" >Dev ops</router-link>
    </li>
  </ul>
  <h2 class="text-center">Short listed applicants</h2>
  <table class="m-2 table table-bordered">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>abukbt13@gmail.com</td>
      <td>abukbt13@gmail.com</td>
      <td><router-link class="btn btn-primary" to="applicant_details/3">View details</router-link></td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>