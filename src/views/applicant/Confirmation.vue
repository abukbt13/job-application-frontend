<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const token = localStorage.getItem('token');
const router =useRouter()
const headers = {
  'Authorization': `Bearer ${token}`,
};
const vacancyname = ref('')
const getVacancies = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/list_vacancies', { headers});
  if(response.status === 200){
    vacancyname.value=response.data.data[0].name
  }

}
onMounted(()=>{
  getVacancies()
})
</script>

<template>
<h1>My Application Details</h1>
  <p>Vacancy: <span>{{vacancyname}}</span></p>

  <table  class="m-3 table table-bordered">

      <thead>
        <th>My Personal details</th>

      </thead>
    <tbody>
      <tr>
        <td>ndcnd : Avraffa</td>
        <td>ndcnd</td>
      </tr>
      <tr>
        <td>ndcnd</td>
        <td>ndcnd</td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped>

</style>