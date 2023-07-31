<script setup>

</script>

<template>
  <nav style="background: #81cdf7;" class="navbar text-white top-nav navbar-expand-lg">
    <div class="container-fluid d-flex flex-row justify-content-between">
      <a class="navbar-brand text-white" href="#">Shara solutions </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="">
        <div class="collapse navbar-collapse" id="navbarNav">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          <a class="nav-link text-white" id="jobs" href="/">Jobs</a>
          <a class="nav-link text-white" href="/contact-us">Contact Us</a>
          <a class="nav-link text-white" href="/login">Login</a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>

.nav-link:hover{
  background: blue;
}
.collapse a{
  font-size:20px;
  padding:1rem;
}
</style>