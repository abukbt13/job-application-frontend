<script setup>

</script>

<template>
<section class="vh-100">
  <div class="container py-5 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <!-- <div class="col-12 col-md-8 col-lg-6 col-xl-5"> -->
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Referees</h3>
		                    <form>
                                <div class="form-group row mt-2">
                                     <label for="name" class="col-4 col-form-label">Name*</label> 
                                <div class="col-2 mb-4">
                                    <input type="text" id="typeEmailX-2" class="form-control form-control-lg" />
                                </div>
                                    <label for="occupation" class="col-2 col-form-label">Occupation*</label> 
                                <div class="col-2 mb-4">
                                    <input type="text" id="typeEmailX-2" class="form-control form-control-lg" />
                                </div>
                                </div>
                                <div class="form-group row mt-2">
                                     <label for="phone" class="col-4 col-form-label">Phone*</label> 
                                <div class="col-2 mb-4">
                                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                                </div>
                                    <label for="email" class="col-2 col-form-label">Email*</label> 
                                <div class="col-2 mb-4">
                                    <input type="text" id="typeEmailX-2" class="form-control form-control-lg" />
                                </div>
                                </div>
                              <div class="form-group row">
                                <div class="offset-4 col-8">
                                  <button name="submit" type="submit" class="btn btn-primary">Save & continue</button>
                                </div>
                              </div>
                            </form>
            <div class="d-flex mt-4 justify-content-around">
              <div class="">
                <router-link to="/applicant/courses" class="text-decoration-none">Previous</router-link>
              </div>
              <div class="">
                <router-link to="/applicant/document" class="text-decoration-none">Next</router-link>
              </div>
            </div>
		                </div>
		            </div>
		            </div>

		        </div>
		    <!-- </div> -->
</section>
</template>

<style scoped>

</style>