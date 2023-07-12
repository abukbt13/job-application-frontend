<script setup>
import {ref} from "vue";

const email = ref('')
const password = ref('')
 const createAccount =async () => {
   const formData = new FormData(email, password);
   const response = await fetch('http://localhost:000/api/auth/register', {
     method: 'POST',
     body: formData
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