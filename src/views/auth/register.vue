<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
const email = ref('')
const password = ref('')
 const createAccount =async () => {
   const formData = new FormData();
   formData.append('email',email.value)
   formData.append('password',password.value)
    await fetch('http://127.0.0.1:8000/api/registerUser', {
     method: 'POST',
     body: formData
   })
       .then(response => {
         if (response.status === 200) {
           return response.json();
         } else {
           throw new Error('Failed to create an account');
         }
       })
       .then(data => {
         localStorage.setItem('token', data.token);
         router.push('/dashboard')
       })
       .catch(error => {
         console.error(error);
       });
 }
</script>

<template>
  <section class="vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">

        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
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