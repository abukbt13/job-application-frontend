<script setup>

</script>

<template>
<section class="vh-100">
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">

    <h3 class="text-center text-primary">Personal Information</h3>
      <form>
        <div class="form-group row">
          <div class="col">
            <label for="firstname" class="col-4 col-form-label">First Name*</label>
            <input type="text" id="typeEmailX-2" class="form-control" />
          </div>
          <div class="col">
            <label for="lastname" class="col-4 col-form-label">Last Name*</label>
            <input type="text" id="typeEmailX-3" class="form-control" />
          </div>
       </div>
      <div class="form-group row">
          <div class="col">
            <label for="email" class="col-4 col-form-label">Gender*</label>
            <input type="email" id="typeEmailX-4" class="form-control" />
          </div>
          <div class="col">
            <label for="phone" class="col-4 col-form-label">Id Number</label>
            <input type="text" id="typeEmailX-5" class="form-control" />
          </div>
       </div>
        <div class="form-group row">
          <div class="col">
            <label for="email" class="col-4 col-form-label">Email*</label>
            <input type="email" id="typeEmailX-4" class="form-control" />
          </div>
          <div class="col">
            <label for="phone" class="col-4 col-form-label">Phone*</label>
            <input type="text" id="typeEmailX-5" class="form-control" />
          </div>
       </div>

      <div class="form-group row">
        <div class="col">
          <label for="city" class="col-form-label">County*</label>
          <input type="text" id="typeEmailX-7" class="form-control" />
        </div>
        <div class="col">
          <label for="constituency" class="col-form-label">Constituency*</label>
          <input type="text" id="typeEmailX-2" class="form-control" />
        </div>
      </div>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <label for="address" class="col-4 col-form-label">Address*</label>
              <input type="text" id="typeEmailX-8" class="form-control" />
            </div>
            <div class="col"><br>
              <button name="submit" type="submit" class="btn mt-3 w- btn-primary">Save & continue</button>
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