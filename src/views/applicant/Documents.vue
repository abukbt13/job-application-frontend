<script setup>

</script>

<template>
  <section class="vh-100">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <form>
          <h3 class="text-center text-primary">Documents Upload</h3>

          <div class="form-group row">
            <div class="col">
              <label for="email" class="">KCSE Certificate</label>
              <input type="file" id="institution" class="form-control" />
            </div>
            <div class="col">
              <label for="email" class="">Degree / diploma Certificate</label>
              <input type="file" id="institution" class="form-control" />
            </div>
          </div>



          <div class="form-group row">
            <div class="col">
              <label for="email" class="">Other document in one file</label>
              <input type="file" class=" w-50 form-control">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="mt-3 w-75 btn btn-success">Submit</button>
          </div>


        </form>
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