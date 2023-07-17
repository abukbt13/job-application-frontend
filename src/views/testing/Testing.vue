<script setup>
import { ShForm } from '@iankibetsh/shframework'

</script>
<template>
<sh-form
:fields="['subject','book']"
action="users/add"

:successCallback="userRegistered"
/>
</template>
<style>

</style>