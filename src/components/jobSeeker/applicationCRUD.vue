<template>
  <div class="col-md-7" id="jobCrud">
    <b-card body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item class="color-secondary" >Current Job Applications</b-nav-item>
        </b-nav>
      </template>

      <b-card-text>
        Add here a list of all jobs that the applicant has applied for.
        <b-card class="p-0 m-0 border-0">
          <b-row>
            <b-col> <b>Title of the job</b></b-col>
            <b-col><b>Payment</b></b-col>
            <b-col><b>Date</b></b-col>
            <b-col><b>Status</b></b-col>
            <b-col> </b-col>
          </b-row>
        </b-card>
        <b-card class="crudCard text-secondary" v-bind:key="application.id" v-for="(application) in applications">
          <b-row>
            <b-col>{{application.job.title}}</b-col>
            <b-col>{{application.job.payment}}$</b-col>
            <b-col>{{application.date}}</b-col>
            <b-col>Status</b-col>
            <b-col> <b-button @click="deleteApplication(application.id)" variant="danger">Cancel</b-button></b-col>
          </b-row>
        </b-card>

      </b-card-text>

    </b-card>


  </div>
</template>

<script>

import api from "@/components/backend-api";

export default {
  name: 'ApplicationCRUD',
  props: ["employeePost"],
  components: {

  },
  data() {
    return {
      applications:[],
      userId: localStorage.getItem("user_id"),
    }
  },

  methods: {

    deleteApplication(jobId) {
      api.deleteJob(jobId)
          .then()
          .catch(err => console.log(err));
    },
  },
  created(){
    api.getApplications(this.userId)
        .then(res => this.applications = res.data)
        .catch(err => console.log(err));
  }

}
</script>

<style>
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
.crudCard:hover{
  background-color: #cccfed;
  color: #333333!important;
}




</style>
