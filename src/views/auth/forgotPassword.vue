<script setup>
    import axios from "axios"
    import{ref} from 'vue'
    const email=ref('')
    const handleForgotPassword=async()=>{
        const res=await axios.post('http://127.0.0.1:8000/api/')
    }
</script>
<template>
<section class="vh-100">
 <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
<form @submit.prevent="handleForgotPassword">
    <h3> Forgot password</h3>
    <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" class="form-control" placeholder="email"/>
        <button class="btn btn-primary btn-block" type="submit">Submit</button>
    </div>
</form>
    </div>
 </div>
</section>
</template>
<style>
   
</style>