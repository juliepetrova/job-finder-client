<template>
  <div id="jobCrud">
    <b-card class="m-5 " body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item class="color-secondary" >Current Job Posts</b-nav-item>
<!--          <b-nav-item active>Past Job Posts</b-nav-item>.-->
        </b-nav>


<!--        <h2>Current Job Posts</h2>-->

      </template>

      <b-card-text>
        Add here a list of all jobs that are currently available from the specific user.
        <b-card>
          <b-row>
            <b-col>Id</b-col>
            <b-col> Title of the job</b-col>
            <b-col> <b-button class="color-primary">Edit</b-button></b-col>
            <b-col> <b-button variant="danger">Delete</b-button></b-col>
            <b-col> Applicants</b-col>
          </b-row>
        </b-card>

      </b-card-text>



    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'JobCRUD',
    components: {

    },
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>

<style>
.color-primary{
  background-color: #4c58cf;
}
.color-secondary{
  color: #5b64c9!important;
  background-color: #cccfed;
  border-color: #cccfed;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
a{
  color: #4c58cf;
}
a:hover{
  color: #4c58cf;
  border-style: none;
}

.card-header{
  background-color: #5b64c9;
}



</style>
