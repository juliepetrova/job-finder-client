<template>
<div class="col-md-7">
  <b-card body-class="text-center" header-tag="nav">
    <template v-slot:header>
      <b-nav card-header tabs>
        <b-nav-item class="color-secondary">Past Job Posts</b-nav-item>
      </b-nav>
    </template>

    <b-card-text>
      Add here a list of all past jobs.
      <b-card class="p-0 m-0 border-0">
        <b-row>
          <b-col><b>Title of the job</b></b-col>
          <b-col><b>Payment</b></b-col>
          <b-col><b>Date</b></b-col>
        </b-row>
      </b-card>
      <b-card class="pastJobCard text-secondary" v-bind:key="job.id" v-for="(job) in jobs">
        <b-row>
          <b-col>{{ job.title }}</b-col>
          <b-col>{{ job.payment }}$</b-col>
          <b-col>{{ job.date }}</b-col>
        </b-row>
      </b-card>

    </b-card-text>


  </b-card>
</div>
</template>

<script>
import api from "@/components/backend-api";

 export default {
  name: 'PastJobs',
   data() {
     return {
       jobs: [],
     }
     },
   created() {
    api.getPastJobs(localStorage.getItem('user_id'))
        .then(res => this.jobs = res.data)
        .catch(err => console.log(err));
   }

 }

</script>

<style scoped>

</style>
