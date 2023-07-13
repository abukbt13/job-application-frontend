<script setup>

import Header from "@/views/includes/header.vue";
</script>

<template>
  <Header />
  <div class="d-flex">
    <div class="side">
      <h2>
        <i class="bi bi-speedometer2"></i>
        Dashboard
      </h2>
      <ul class="border-top navbar-nav">
        <li class="list-unstyled d-flex align-items-center ">
          <router-link class="nav nav-link" to="/dashboard">
            <i  style="font-size: 27px;" class="me-2 bi-list-stars"></i>
            Vacancies
          </router-link>
        </li>
        <li class="list-unstyled d-flex align-items-center ">
          <router-link class="nav nav-link" to="/dashboard/applicant">
            <i style="font-size: 27px" class="me-2 bi bi-people"></i>
            Application
          </router-link>

        </li>
        <li class="list-unstyled d-flex align-items-center ">
          <router-link class="nav nav-link" to="/dashboard/short_listed">
            <i style="font-size: 27px" class="me-2 bi bi-list-check"></i>
            Short Listed Applicats
          </router-link>
        </li>

      </ul>
    </div>
    <div class="main border-start border-black">
     <router-view></router-view>
    </div>
  </div>

</template>

<style scoped>
.side{
  height: 100vh;
  padding:1rem;
}
.nav-link:active{
  background-color: white;
}
</style>