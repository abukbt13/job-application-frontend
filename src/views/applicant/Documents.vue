<script setup>

import { headers } from "@/composables/headers.js";
import axios from "axios";
import {onMounted, ref, watch} from "vue";

const description =ref('')
const name =ref('')
const file =ref('')
watch(name, (newValue) => {
  if (newValue === 'degree') {
    description.value = 'Degree certificate';
  } else if (newValue === 'resume') {
    description.value = 'RESUME certificate';
  } else {
    description.value = 'KCSE Certificate';
  }
});
function certificateUpload(e){
  file.value=e.target.files[0];
}
const documents=ref([])

const getPersonalDocuments = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_documents', {headers});
  if (response.status === 200) {
    documents.value = response.data.user;
    console.log(references)
  }
}
const saveDocument = async () => {
  const formData = new FormData()
  formData.append('name',name.value)
  formData.append('description',description.value)
  formData.append('file',file.value)
  console.log(formData)

  const response  = await axios.post('http://127.0.0.1:8000/api/addDocument',formData,{headers})
  if(response.status===200){
    alert('success')
  }

}
onMounted(()=>{
  getPersonalDocuments()
})
</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <form @submit.prevent="saveDocument">
          <h3 class="text-center text-primary">Documents Upload</h3>
          <label>Select Type of document</label><br>


          <select v-model="name">
            <option disabled selected value="">--- Select one ---</option>
            <option value="kcse">KCSE</option>
            <option value="resume">Resume</option>
            <option value="degree">Degree</option>
          </select>

          <div class="form-group row">
            <div class="col">
              <label for="certificate" class="">KCSE Certificate</label>
              <input type="file" @change="certificateUpload" id="institution" class="form-control" />
              <button class="btn btn-success">Submit</button>

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
          </tr>
          </thead>
          <tbody>
          <tr v-for="document in documents" :key="document">
            <td>{{document.name}}</td>
            <td>{{document.description}}</td>
            <td>{{document.file}}</td>

          </tr>
          </tbody>
        </table>
        <div class="d-flex mt-4 justify-content-around">
          <div class="">
            <router-link to="/applicant/referees" class="text-decoration-none">Previous</router-link>
          </div>
          <div class="">
            <router-link to="/applicant/confirmation" class="text-decoration-none">Finish</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </section>
</template>

<style scoped>

</style>