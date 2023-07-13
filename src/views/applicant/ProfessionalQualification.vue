<script setup>

</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <h3 class="text-center text-primary">Professional Qualification</h3>
        <form>
          <div class="form-group row">
            <div class="col">
              <label for="firstname" class="col-form-label">Level of Education</label><br>
              <select class="form-control">
                <option value="">ewfc</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div class="col">
              <label for="email" class="col-4 col-form-label">Course</label>
              <select class="form-control" id="">
                <option value="">Select</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>
          </div>
            <div class="form-group row">
            <div class="col">
              <label for="lastname" class="col-4 col-form-label">Institution Name</label>
              <input type="text" id="institution" class="form-control" />
            </div>
              <div class="col">
                <label for="phone" class="col-4 col-form-label">Award</label><br>
                <select class="form-control" id="">
                  <option value="">Select</option>
                  <option value="First class">First Class</option>
                  <option value="Second Class">Second Class</option>
                  <option value="Pass">Pass</option>
                </select>
              </div>
          </div>


          <div class="form-group row">
            <div class="col">
              <label for="email" class="col-4 col-form-label">Start date</label>
              <input type="date" class="form-control">
            </div>
            <div class="col">
              <label for="email" class="col-4 col-form-label">End date</label>
              <input type="date" class="form-control">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="mt-3 w-75 btn btn-success">Submit</button>
          </div>


        </form>
        <div class="d-flex mt-4 justify-content-around">
          <div class="">
            <router-link to="/applicant/information" class="text-decoration-none">Previous</router-link>
          </div>
          <div class="">
            <router-link to="/applicant/courses" class="text-decoration-none">Next</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </section>
</template>

<style scoped>

</style>