<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {headers} from "../../composables/headers.js";
import {useRouter} from "vue-router";

const fullName =ref('')
const occupation =ref('')
const email = ref('')
const phone  = ref('')
const router = useRouter()
// const user_id=ref('')
const references=ref([])
const progress = localStorage.getItem('progress')

const redirect = async  (progress) => {
  if(progress>4){
  }
  else {
    await  router.push('/applicant/experience')
  }
}
const getPersonalReferee = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_referees', {headers});
  if (response.status === 200) {
     references.value = response.data.user;
    console.log(references)
  }
}
const saveReference = async () =>{
  const formData = new FormData()
  formData.append('fullName',fullName.value)
  formData.append('occupation',occupation.value)
  formData.append('email',email.value)
  formData.append('phone',phone.value)
  const response = await axios.post('http://127.0.0.1:8000/api/addReferees', formData,{headers })
  if(response.status===200){

    localStorage.setItem('progress',6)
    alert('referees Info saving')
    await router.push('/applicant/document')  }
}
onMounted(()=>{
  getPersonalReferee()
  redirect(progress)
})
</script>

<template>
<section class="vh-100">
  <div class="container py-5 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <!-- <div class="col-12 col-md-8 col-lg-6 col-xl-5"> -->
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Referees</h3>
              <form @submit.prevent="saveReference">
                      <div class="form-group row mt-2">
                            <label for="name" class="col-4 col-form-label">Name*</label> 
                      <div class="col-2 mb-4">
                          <input type="text" v-model="fullName" required class="form-control form-control-lg" />
                      </div>
                          <label for="occupation" class="col-2 col-form-label">Occupation*</label> 
                      <div class="col-2 mb-4">
                          <input type="text" v-model="occupation" required class="form-control form-control-lg" />
                      </div>
                      </div>
                      <div class="form-group row mt-2">
                            <label for="phone" class="col-4 col-form-label">Phone*</label> 
                      <div class="col-2 mb-4">
                          <input type="text" v-model="phone" required class="form-control form-control-lg" />
                      </div>
                          <label for="email" class="col-2 col-form-label">Email*</label> 
                      <div class="col-2 mb-4">
                          <input type="text" v-model="email" required class="form-control form-control-lg" />
                      </div>
                      </div>
                    <div class="form-group row">
                      <div class="offset-4 col-8">
                        <button name="submit" type="submit" required class="btn btn-primary">Save & continue</button>
                      </div>
                    </div>
                  </form>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th colspan="4">List of My Reference</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Ocupation</th>
                <th>Email</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="reference in references" :key="reference">
                <td>{{reference.fullName}}</td>
                <td>{{reference.phone}}</td>
                <td>{{reference.occupation}}</td>
                <td>{{reference.email}}</td>

              </tr>
              </tbody>
            </table>

            <div class="d-flex mt-4 justify-content-around">
              <div class="">
                <router-link to="/applicant/courses" class="text-decoration-none">Previous</router-link>
              </div>
              <div class="">
                <router-link to="/applicant/document" class="text-decoration-none">Next</router-link>
              </div>
            </div>
		                </div>
		            </div>
		            </div>


		        </div>
		    <!-- </div> -->
</section>
</template>

<style scoped>

</style>