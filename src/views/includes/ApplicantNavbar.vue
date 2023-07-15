<script setup>

</script>

<template>
  <div style="width: 15rem;" class="side">
    <h2>
      <i class="bi bi-speedometer2"></i>
      Dashboard
    </h2>
    <ul class="border-top navbar-nav">
      <li class="list-unstyled d-flex align-items-center ">
       <router-link class="nav nav-link" to="/applicant">
         <i  style="font-size: 27px;" class="me-2 bi bi-person"></i>
         Vacancies
       </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">
       <router-link class="nav nav-link" to="/applicant/information">
         <i  style="font-size: 27px;" class="me-2 bi bi-person"></i>
         Personal Info
       </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">
        <router-link class="nav nav-link" to="/applicant/qualification">
        <i style="font-size: 27px" class="me-2 bi bi-trophy-fill"></i>
        Qualifications
        </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">

        <router-link class="nav nav-link" to="/applicant/courses">
        <i style="font-size: 27px;" class="me-2 bi  bi-mortarboard me-2"></i>
        Courses
        </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">

        <router-link class="nav nav-link" to="/applicant/experience">
        <i style="font-size: 27px;" class="me-2 bi  bi-mortarboard me-2"></i>
        Experiences
        </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">
        <router-link class="nav nav-link" to="/applicant/referees">
          <i  style="font-size: 27px;" class="me-2 bi bi-file-earmark-medical-fill"></i>
          Referees
        </router-link>
      </li>
      <li class="list-unstyled d-flex align-items-center ">
        <router-link class="nav nav-link" to="/applicant/document">
        <i  style="font-size: 27px;" class="me-2 bi bi-file-earmark-medical-fill"></i>
        Document
        </router-link>
      </li>


      <li class="list-unstyled d-flex align-items-center ">

        <router-link class="nav nav-link" to="/applicant/confirmation">
        <i style="font-size: 27px;"  class="me-2 bi bi-list-check"></i>
          Confirmation
        </router-link>
      </li>
    </ul>
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