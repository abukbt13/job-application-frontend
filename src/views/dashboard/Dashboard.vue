<script setup>

import Header from "@/views/includes/header.vue";
import AdminNavbar from "@/views/includes/AdminNavbar.vue";

</script>

<template>
  <Header />
  <div class="home d-flex">
    <div class="sidebar bg-dark text-white">
      <AdminNavbar />
    </div>
    <div class="main">
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