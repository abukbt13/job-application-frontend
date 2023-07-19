<script setup>
<<<<<<< HEAD
import { ShForm,shApis, ShTable  } from '@iankibetsh/shframework'
const {successCallback} = ShForm
=======
import { ShForm } from '@iankibetsh/shframework'
const {successCallback}=ShForm
console.log('hey there response')
>>>>>>> f89a731 (minor changes)
console.log(successCallback)
import {ref} from 'vue'
const user_id=ref('')
user_id.value=1

const books=ref(null)
function showBooks() {
  shApis.doGet('show-all').then(res=>{
    console.log(res.data)
   books.value = res.data
  }).catch(error=>{
    console.log(error)
  })
}
showBooks()
</script>
<template>
<sh-form
:fields="['title','subject','author']"
action="add_book"

:successCallback="userRegistered"
:fill-selects="{
    user_id: {
      url: 'show-book/list?all=1'
    }
  }"
/>
<sh-table 
  :headers="['id','name','subject']"
  end-point="show-all"
  />
{{ show-book }}
</template>
<style>

</style>