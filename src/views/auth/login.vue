<script setup>
import { ShForm,shApis, ShTable } from '@iankibetsh/shframework'
function userLogin(res) {
  console.log(res)
  localStorage.setItem('token',res.token)
}

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
              :current-data="{
                editedUser
              }"
              action="auth/login"
              :successCallback="userLogin"
              />

            </div>
          </div>
        <div class="d-flex">
      
          <div class="col">
            <router-link to="/forgot-password">
            Forget password
          </router-link>
          </div>
        </div>
        <div class="">
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>

</style>