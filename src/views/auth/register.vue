
<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
const router = useRouter()
const email = ref('')
const password = ref('')
const c_password = ref('')
const regerror = ref('')

const apiUrl = import.meta.env.VITE_APP_API_URL;

 const createAccount =async () => {
  if(email.value=='' && password.value==''){
    regerror.value = 'Please fill all fields'
  }
   else if (password.value === c_password.value) {
     const formData = new FormData();
     formData.append('email', email.value)
     formData.append('password', password.value)
     formData.append('c_password', c_password.value)
    const res = await axios.post(apiUrl+'registerUser',formData)
       if(res.status === 200){
            if(res.data.status === 'success'){
              localStorage.setItem('token', res.data.token)

              localStorage.setItem('progress', 0)
              localStorage.setItem('progress', 0)
             await router.push('applicant')
            }
            else{
              regerror.value = res.data.message
            }
       }
       else{
        regerror.value = 'url not found'
       } 
        
   }
   else {
     regerror.value = 'Passwords do not match'
   }
 }
</script>

<template>
  <section class="vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">

        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="error text-center bg-danger text-white text-uppercase">{{regerror}}</div>
          <p>Already have an account <a href="login">login here</a></p>
          <form @submit.prevent="createAccount">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" v-model="email" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="password">
              </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" v-model="c_password" placeholder="password">
              </div>
              <div class="">
                <button type="submit" class="w-100 btn btn-primary btn-block">Register</button>
              </div>
          </form>
        </div>

      </div>

</section>
</template>

<style scoped>

</style>

