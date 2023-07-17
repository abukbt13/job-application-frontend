<script setup>
import { ShForm } from '@iankibetsh/shframework'

</script>

<template>
 
  <section class="vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <p>Don't  have an account <a href="register">Create account here</a></p>
          <div class="container">
            <div class="row">
              <sh-form
              :fields="['email','password']"
              action="auth/login"
              :successCallback="userRegistered"
              />
            </div>
          </div>
        <div class="d-flex">
      
          <div class="col"><a href="request_password" class="text-decoration-none">Forget password</a></div>
        </div>
        <div class="">
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>

</style>