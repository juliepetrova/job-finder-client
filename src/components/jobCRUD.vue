<template>
  <div id="jobCrud">
    <b-card class="m-5" title="Current Job Posts" body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item active>Current Job Posts</b-nav-item>
          <b-nav-item>Past Job Posts</b-nav-item>
          <b-nav-item class="ml-auto">
            <b-button @click="modalShow = !modalShow">Add job offer</b-button>
          </b-nav-item>
        </b-nav>

        <b-modal v-model="modalShow"><CreateJob></CreateJob></b-modal>

      </template>

      <b-card-text>
        Add here a list of all jobs that are currently available from the specific user.
        <b-card>
          <b-row>
            <b-col>Id</b-col>
            <b-col> Title of the job</b-col>
            <b-col> <b-button variant="primary">Edit</b-button></b-col>
            <b-col> <b-button variant="danger">Delete</b-button></b-col>
            <b-col> Applicants</b-col>
          </b-row>
        </b-card>

      </b-card-text>



    </b-card>
  </div>
</template>

<script>
  import CreateJob from "@/components/createJob";
  export default {
    name: 'JobCRUD',
    components: {
      CreateJob
    },
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>

<style>

</style>
