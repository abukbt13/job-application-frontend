<script setup>
import {useRouter} from "vue-router";
const error = ref('')
const router = useRouter()
import { ShForm,shApis, ShTable } from '@iankibetsh/shframework'
import {ref} from "vue";
function userLogin(res) {
    if(res.status === 'success'){
      localStorage.setItem('token',res.token)
      router.push('/applicant')
    }
    else {
      error.value=res.message
    }

}

</script>

<template>
 
  <section class="vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="bg-danger text-center text-white">{{error}}</div>
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