<template>
  <div class="col-md-7">
    <b-card body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item class="color-secondary">Past Job Applications</b-nav-item>
        </b-nav>
      </template>

      <b-card-text>
        Add here a list of all past applications.
        <b-card class="p-0 m-0 border-0">
          <b-row>
            <b-col><b>Title of the job</b></b-col>
            <b-col><b>Payment</b></b-col>
            <b-col><b>Date</b></b-col>
          </b-row>
        </b-card>
        <b-card class="pastJobCard text-secondary" v-bind:key="application.id" v-for="(application) in applications">
          <b-row>
            <b-col>{{application.job.title }}</b-col>
            <b-col>{{application.job.payment}}$</b-col>
            <b-col>{{application.job.date }}</b-col>
          </b-row>
        </b-card>

      </b-card-text>


    </b-card>
  </div>
</template>

<script>
import api from "@/components/backend-api";

export default {
  name: 'PastApplications',
  data() {
    return {
      applications: [],
    }
  },
  created() {
    api.getPastApplications(localStorage.getItem('user_id'))
        .then(res => this.applications = res.data)
        .catch(err => console.log(err));
  }

}

</script>

<style scoped>

</style>
