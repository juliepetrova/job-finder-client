<template>
  <div id="jobCrud">
    <b-card class="m-5 " body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item class="color-secondary" >Current Job Posts</b-nav-item>
        </b-nav>


      </template>

      <b-card-text>
        Add here a list of all jobs that are currently available from the specific user.
        <b-card class="p-0 m-0 border-0">
          <b-row>
            <b-col> <b>Title of the job</b></b-col>
            <b-col><b>Payment</b></b-col>
            <b-col><b>Date</b></b-col>
            <b-col> </b-col>
            <b-col> </b-col>
            <b-col> <b>Applicants</b></b-col>
          </b-row>
        </b-card>
        <b-card class="crudCard text-secondary" v-bind:key="employeePost.id" v-for="employeePost in employeePosts">
          <b-row>
            <b-col>{{employeePost.title}}</b-col>
            <b-col>{{employeePost.payment}}$</b-col>
            <b-col>{{employeePost.date}}</b-col>
            <b-col> <b-button @click="editJob(employeePost.id)" class="color-primary">Edit</b-button></b-col>
            <b-col> <b-button @click="deleteJob(employeePost.id)" variant="danger">Delete</b-button></b-col>
            <b-col> Applicants</b-col>
          </b-row>
        </b-card>

      </b-card-text>



    </b-card>

<!--    Edit  -->
    <b-modal v-model="modalShow">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-0" label="Id:" label-for="input-0" hidden>
          <b-form-input id="input-0" v-model="form.id" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Job title:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.title" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description" label-for="input-2">
          <b-form-input id="input-2" v-model="form.description" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Date:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.date" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Payment:" label-for="input-4">
          <b-form-input id="input-4" v-model="form.payment" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="City:" label-for="input-5">
          <b-form-input id="input-5" v-model="form.city" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-6" label="Address:" label-for="input-6">
          <b-form-input id="input-6" v-model="form.address" required></b-form-input>
        </b-form-group>

        <b-button type="submit" class="color-primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
    </b-modal>
  </div>
</template>

<script>


  import api from "@/components/backend-api";

  export default {
    name: 'JobCRUD',
    props: ["employeePost"],
    components: {

    },
    data() {
      return {
        employeePosts: [],
        userId: 1,

        form: {
          status_id: 1,
          title: '',
          description: '',
          date: '',
          payment: 0,
          city: '',
          address: '',
          user: {
            id: 1
          }
        },

        show: true,
        modalShow: false
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let data = {
          id: this.form.id,
          status_id: 1,
          title: this.form.title,
          description: this.form.description,
          date: this.form.date,
          payment: this.form.payment,
          city: this.form.city,
          address: this.form.address,
          user: {
            id: 1
          }
        }
        api.updateJob(data)
            .then(res => this.post = res.data)
            .catch(err => console.log(err));
        this.show = false
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.title = ''
        this.form.description = ''
        this.form.date = ''
        this.form.payment = 0
        this.form.city = ""
        this.form.address = ""
        this.form.id = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      editJob(jobId){
        this.modalShow = !this.modalShow;
        this.getJobPost(jobId);
      },

      deleteJob(jobId){
        api.deleteJob(jobId)
            .then()
            .catch(err => console.log(err));
        // api.getEmployeePosts(this.userId)
        //     .then(res => this.employeePosts = res.data)
        //     .catch(err => console.log(err));
      },
      getJobPost(jobId){
        api.getJob(jobId)
            .then(res => this.form = res.data)
            .catch(err => console.log(err));
      }
    },
    created(){
      api.getEmployeePosts(this.userId)
          .then(res => this.employeePosts = res.data)
          .catch(err => console.log(err));
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
.crudCard:hover{
  background-color: #cccfed;
  color: #333333!important;
}




</style>
