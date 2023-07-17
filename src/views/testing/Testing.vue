<script setup>
import { ShForm } from '@iankibetsh/shframework'
import {ref} from 'vue'
const user_id=ref('')
user_id.value=1
</script>
<template>
<sh-form
:fields="['title','subject','author']"
action="add_book"

:successCallback="userRegistered"
:fill-selects="{
    user_id: {
      url: 'show-book/1'
    }
  }"

/>
</template>
<style>

</style>