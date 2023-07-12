<script setup>

import Header from "@/views/includes/header.vue";
</script>

<template>
  <div class="ms-3 me-3">
    <Header />
    <div class="main d-flex flex-column align-items-center justify-content-center">
      <h2 class="my-3">Shara solution Company</h2>
      <h2 class="mb-5">Home of Software Solutions</h2>
      <div class="d-flex justify-content-center">
        <a href="about-us" class="btn btn-danger">About Us</a>
      </div>
    </div>
    <section style="background-color: aqua;" class="d-flex flex-column align-items-center justify-content-center">
      <h1 class="mb-2">Shara Solutions is hiring developers </h1>
      <p class="mb-4 display-4">The following are the available positions  </p>

    <div class="row" id="jobs">
      <div class="col">
        <div class="card ms-3">
          <div class="card-header  bg-dark text-white text-center">
          Backend Developer
          </div>
          <div class="card-body">
            <h3 class="card-title text-center text-primary">Description</h3>
            <p class="card-text">
              Creating Endpoints api for our frontend applications.Testing of endpoints to ensure authentications are met.
            </p>
            <h5 class=" text-center text-primary">Requirements</h5>
            <ul>
              <li>He/she should know how to code with php and laravel framework</li>
              <li>He/she should know how to use version control and have interacted with github or gitlab</li>
              <li>He/she should have knowledge of linux Operating system</li>
            </ul>
            <div class="d-flex justify-content-center">
              <a href="register" class="btn btn-danger">Apply Us</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header  bg-dark text-white text-center">
            Frontend developer
          </div>
          <div class="card-body">
            <h5 class="card-title text-center text-primary">Description</h5>
            <p class="card-text ">
              Creating of frontend app that are very user friendly
            </p>
            <h5 class=" text-center text-primary">Requirements</h5>
            <ul>
              <li>He/she should know how to code with javascript and vue js framework framework</li>
              <li>He/she should know how to use version control and have interacted with github or gitlab</li>
              <li>He/she should have knowledge of linux Operating system</li>
              <li>He/she should know css and bootstrap well</li>
            </ul>
            <div class="d-flex justify-content-center">
              <a href="register" class="btn btn-danger">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card me-2">
          <div class="card-header  bg-dark text-white text-center">
            Dev Ops  Engineer
          </div>
          <div class="card-body">
            <h5 class="card-title text-primary text-center">Description</h5>
            <p class="card-text">
              Hosting and maintaining websites in different host and maintaining them.
            </p>
            <h5 class=" text-center text-primary">Requirements</h5>
            <ul>
              <li>He/she should be familiar with Aws </li>
              <li>He/she should know how to use version control and have interacted with github or gitlab</li>
              <li>He/she should have knowledge of linux Operating system</li>
            </ul><div class="d-flex justify-content-center">
             <a href="register" class="btn btn-danger">Apply Now</a>
           </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <div class="footer pb-5 pt-3 text-dark">
    <div class="row ms-5 me-5">
      <div class="ps-2 col">
        <h5 class="text-primary">Useful links</h5>
        <ul class="ms-3 list-unstyled">
          <li>Login</li>
          <li>Login</li>
          <li>Login</li>
          <li>Login</li>
          <li>Login</li>
        </ul>
      </div>
      <div class="col">
        <h5 class="text-primary">Our Services</h5>
        <ul class="list-unstyled">
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
        </ul>
      </div>
      <div class="col">
        <h5 class="text-primary">Contact Us</h5>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">How can we help you</label>
             <textarea class="form-control"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>

    <div class="d-flex justify-content-center align-items-center">
      <a href="">
        <i class="mx-3 bi bi-facebook"></i>
      </a>
      <a href="">
        <i class="bi mx-3 bi-twitter"></i>
      </a>
      <a href="">
        <i class="bi mx-3 bi-instagram"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.main{
  background: #f5ebe0;
  //width: 100vw;
  height: 23rem;
}
.footer{
  background: #f5ebe0;
}
</style>
