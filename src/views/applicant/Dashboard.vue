<script setup>

import ProfessionalQualification from "@/views/applicant/ProfessionalQualification.vue";
</script>
<template>
  <div class="main d-flex">
    <div class="sidebar">
        <h2>Dashboard</h2>
          <ul class="list-unstyled ms-2">
            <li>
              <router-link class="nav  nav-link active" to="/dashboard">Personal Info</router-link>
            </li>
            <li>
              <router-link class="nav nav-link" to="/dashboard/relevantourses">Relevant</router-link>
            </li>
            <li>
              <a class="nav-link" href="/dashboard/relevantCourses">relevantCourses</a>
            </li>
            <li>
              <a class="nav-link" href="/dashboard/relevantCourses">relevantCourses</a>
            </li>
            <li>
              <a class="nav-link" href="/dashboard/relevantCourses">relevantCourses</a>
            </li>
          </ul>
    </div>
    <div class="sidebar">
      <router-view></router-view>
    </div>
  </div>

</template>
<style>
</style>