<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {headers} from "@/composables/headers";
import {useRouter} from "vue-router";

const exist_id = ref('')
const firstName = ref('')
const idNo = ref('')
const lastName = ref('')
const gender = ref('')
const phone = ref('')
const address = ref('')
const county = ref('')
const constituency = ref('')
const router = useRouter()

const progress = localStorage.getItem('progress')
alert(progress)
const checkProgress =async (progress) => {
}
const getPersonalInfo= async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_personal_info', { headers});
  if(response.status === 200){
    firstName.value=response.data.user[0].firstName
    idNo.value=response.data.user[0].idNo
    lastName.value=response.data.user[0].lastName
    gender.value=response.data.user[0].gender
    phone.value=response.data.user[0].phone
    address.value=response.data.user[0].address
    county.value=response.data.user[0].county
    constituency.value=response.data.user[0].constituency
    exist_id.value=response.data.user[0].id
    // console.log(firstName)
  }

}
const savePersonalInfo =async () => {
    const formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("gender", gender.value);
    formData.append("phone", phone.value);
    formData.append("address", address.value);
    formData.append("county", county.value);
    formData.append("constituency", constituency.value);
    formData.append("idNo", idNo.value);
    formData.append("exist_id", exist_id.value);
if(!exist_id.value) {
  const ressponse = await axios.post('http://127.0.0.1:8000/api/addPersonalInfo',formData,{ headers })
  if(ressponse.status==200){
    alert('Personal Info Saved')
  }
}
else{
  alert('bbhbp')
  const ressponse = await axios.post('http://127.0.0.1:8000/api/update_personalInfo',formData,{ headers })
  if(ressponse.status==200){
    alert('Personal Info u')
  }
  else{
    alert('haipati')
  }
}
 


}

onMounted(()=>{
  getPersonalInfo()
  checkProgress()
})
</script>

<template>
<section class="vh-100">
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">

    <h3 class="text-center text-primary">Personal Information</h3>
      <form @submit.prevent="savePersonalInfo">
        <div class="form-group row">
          <div class="col">
            <label for="firstname" class="col-4 col-form-label">First Name*</label>
            <input type="text" v-model="firstName" required class="form-control" />
          </div>
          <div class="col">
            <label for="lastname" class="col-4 col-form-label">Last Name*</label>
            <input type="text" v-model="lastName" required class="form-control" />
          </div>
       </div>
      <div class="form-group row">
          <div class="col">
            <label for="email" class="col-4 col-form-label">Gender*</label>
            <input type="text" v-model="gender" required class="form-control" />
          </div>
          <div class="col">
            <label for="phone" class="col-4 col-form-label">Phone Number</label>
            <input type="number" v-model="phone" required class="form-control" />
          </div>
       </div>
        <div class="form-group row">
          <div class="col">
            <label for="address" class="col-4 col-form-label">Address*</label>
            <input type="text" v-model="address" required class="form-control" />
          </div>
          <div class="col">
            <label for="address" class="col-4 col-form-label">Id Number</label>
            <input type="number" v-model="idNo" required class="form-control" />
          </div>

       </div>

      <div class="form-group row">
        <div class="col">
          <label for="city" class="col-form-label">County*</label>
          <input type="text" v-model="county" required class="form-control" />
        </div>
        <div class="col">
          <label for="constituency" class="col-form-label">Constituency*</label>
          <input type="text" v-model="constituency" required class="form-control" />
        </div>
      </div>
        <div class="form-group">
          <div class="row">
            <div class="col"><br>
              <button  type="submit" class="btn mt-3 w- btn-primary">Save & continue</button>
            </div>
          </div>
    </div>
  </form>
      <div class="d-flex mt-4 justify-content-around">
            <div class="">
              <router-link to="/applicant" class="text-decoration-none">Previous</router-link>
            </div>
            <div class="">
              <router-link to="/applicant/qualification" class="text-decoration-none">Next</router-link>
            </div>
      </div>
</div>
</div>

		    <!-- </div> -->
</section>
</template>

<style scoped>

</style>