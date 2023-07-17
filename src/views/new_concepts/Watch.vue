<script setup>
import {ref, watch} from "vue";

const savings = ref('')
const status = ref('')
watch(savings,(newValue,oldValue)=>{
  if(newValue){
    status.value = "success"
  }
  else{
    status.value = "warning"
  }
})
</script>

<template>
  <label for="">Savings</label>
  <input type="number" v-model="savings">

  <p>My asvings is: {{savings}}</p>
  Status
  {{status}}
</template>

<style scoped>

</style>