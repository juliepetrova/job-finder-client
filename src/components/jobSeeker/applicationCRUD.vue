<template>
  <div class="col-md-7" id="jobCrud">
    <vue-confirm-dialog></vue-confirm-dialog>
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
        <b-card class="crudCard text-secondary" v-bind:key="application.id" v-for="(application, index) in applications">
          <b-row>
            <b-col><router-link :to="'/job/' + application.job.id">
              {{application.job.title}}</router-link></b-col>
            <b-col>{{application.job.payment}}$</b-col>
            <b-col>{{application.job.date}}</b-col>
            <b-col>{{addStatus(application.status_id)}}</b-col>
            <b-col>
              <b-button @click="deleteApplication(index, application.id)" variant="danger">Cancel</b-button>
            </b-col>
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
      status: '',
      userId: localStorage.getItem("user_id"),
    }
  },

  methods: {

    deleteApplication(index, applicationId) {
      this.$confirm(
          {
            message: `Are you sure?`,
            button: {
              no: 'No',
              yes: 'Yes'
            },
            /**
             * Callback Function
             * @param {Boolean} confirm
             */
            callback: confirm => {
              if (confirm) {
                this.applications.splice(index, 1)
                api.deleteApplication(applicationId)
                    .then()
                    .catch(err => console.log(err));
              }
            }
          }
      )
    },
    addStatus(status_id) {
      let name = "";
      switch(status_id) {
        case 1:
          name = 'Available'
          break;
        case 2:
          name = 'Completed'
          break;
        case 3:
          name = 'Accepted'
          break;
        case 4:
          name = 'In progress'
          break;
        case 5:
          name = 'Denied'
          break;
        default:
          name = 'Unavailable'
      }
      return name;
    }
  },
  created(){
    api.getApplications(this.userId)
        .then(res => this.applications = res.data)
        .catch(err => console.log(err));
  },


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
