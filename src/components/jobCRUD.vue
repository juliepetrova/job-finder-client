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
            <b-col>Id {{employeePost.id}}</b-col>
            <b-col> Title of the job {{employeePost.title}}</b-col>
            <b-col> <b-button @click="editJob(employeePost.id)" class="color-primary">Edit</b-button></b-col>
            <b-col> <b-button @click="deleteJob(employeePost.id)" variant="danger">Delete</b-button></b-col>
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
    props: ["employeePost"],
    components: {

    },
    data() {
      return {
        modalShow: false,
      }
    },

    methods: {
      // eslint-disable-next-line no-unused-vars
      editJob(jobId){

      },
      // eslint-disable-next-line no-unused-vars
      deleteJob(jobId){

      },


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
