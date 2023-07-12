<script setup>

</script>

<template>
  <section class="vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <p>Don't  have an account <a href="register">Create account here</a></p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" v-model="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="password" placeholder="password">
        </div>
        <div class="d-flex">
          <div class="col">
            <input type="checkbox">
            Remember me
          </div>
          <div class="col"><a href="request_password" class="text-decoration-none">Forget password</a></div>
        </div>
        <div class="">
          <button type="submit" class="btn w-100 mt-3 btn-primary btn-block">Login</button>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>

</style>