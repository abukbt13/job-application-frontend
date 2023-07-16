<script setup>
import Header from "@/views/includes/header.vue";
import ApplicatNavbar from "@/views/includes/ApplicantNavbar.vue";


</script>
<template>
  <Header />
  <div class="home d-flex">
    <div class="sidebar bg-dark text-white">
      <ApplicatNavbar />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>


</template>
<style>
</style>