<template>
  <div class="col-md-7" id="jobCrud">

    <vue-confirm-dialog></vue-confirm-dialog>

    <!--    Sidebar applicant profile-->
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" shadow>
      <template>
        <div class="p-3">
          <div class=" shadow p-4  ">
            <div class="mx-auto mb-4">
              <img class="rounded-full h-32 w-32 object-cover mx-auto"
                   :src=" userAppl.image "
                   alt="ProfileImage"/>
            </div>
            <div class="text-center"> Applicant name: <br> <b>{{ userAppl.first_name }} {{ userAppl.last_name }} </b></div>
            <div class="pt-8 px-4 text-lg">
              <h2 class="py-3"><i class="far fa-envelope"></i> {{userAppl.email}}</h2>
              <h2 class="py-3"><i class="fas fa-university"></i> {{userAppl.city}}</h2>
              <h2 class="py-3 mb-5"><i class="fas fa-globe-americas"></i> {{userAppl.country}}</h2>
<!--             Skills -->
              <div class="row">
                <div class="pt-1 pl-3 pr-1 m-1 rounded-2xl mr-2">
                  <label class="float-left pr-3">Skills: </label>
                </div>
              <div class="bg-purple-400 text-white pt-1 pl-3 pr-1 m-1 rounded-2xl mr-2 shadow-inner" v-bind:key="skill" v-for="(skill) in getSkills()">
                <label class="float-left pr-3">{{ skill }}</label>
              </div>
              </div>

              <div class="m-5"></div>
              <a  :href="'mailto:' + userAppl.email"
                  class=" mailtoui bg-indigo-300 hover:bg-purple-700 text-white font-bold py-3 px-4 m-3 rounded shadow-2xl focus:outline-none focus:shadow-outline"
              >
                Send email
              </a>
            </div>
            <!--          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>-->
          </div>
        </div>
      </template>
    </b-sidebar>
    <!--    End Sidebar-->

    <b-card body-class="text-center" header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item class="color-secondary">Current Job Posts</b-nav-item>
        </b-nav>
      </template>

      <b-card-text class="overflow-auto scrolling">
        <b-card class="p-0 m-0 border-0">
          <b-row>
            <b-col><b>Title of the job</b></b-col>
            <b-col><b>Payment</b></b-col>
            <b-col><b>Date</b></b-col>
            <b-col></b-col>
            <b-col></b-col>
            <b-col><b>Applicants</b></b-col>
          </b-row>
        </b-card>
        <b-card class="crudCard text-secondary" v-bind:key="job.id"
                v-for="(job, index) in employeePosts">
          <b-row>
            <b-col>{{ job.title }}</b-col>
            <b-col>{{ job.payment }}$</b-col>
            <b-col>{{ job.date }}</b-col>
            <b-col>
              <button @click="editJob(job)" class="color-primary text-white rounded-full p-2 px-3"><i
                  class="far fa-edit"></i></button>
            </b-col>
            <b-col>
              <button @click="deleteJob(index, job.id)" class="text-white rounded-full p-2 px-3 bg-red-400"><i
                  class="far fa-trash-alt"></i></button>
            </b-col>
            <b-col>
              <button v-if="job.status.id != 4 && job.status.id != 6" @click="getApplications(job.id)" class="text-white rounded-full p-2 px-3 bg-yellow-500">
                View
              </button>
              <button v-if="job.status.id === 6" class="text-white rounded-full p-2 px-3 bg-green-300 disabled">
                Reported
              </button>
              <button v-if="job.status.id === 4 && !toggleModalRating" @click="toggleModalRating = !toggleModalRating" class="text-white rounded-full p-2 px-3 bg-green-500">
                Rate user
              </button>
              <div class="flex">
<!--                <div class="row">-->
                <input v-if="job.status.id === 4 && toggleModalRating"
                       class="flex-initial shadow appearance-none border rounded-full m-1 py-2 px-3 text-gray-700 w-1/2 leading-tight focus:outline-none bg-purple-100"
                       v-model="rating">
                <button v-if="job.status.id === 4 && toggleModalRating" @click="rateApplicant(job, rating)"
                        class="flex-initial rounded-full h-8 w-8 shadow-md flex m-1 justify-center items-center bg-purple-100 hover:bg-purple-200 focus:outline-none font-light text-purple-500">
                  <i class="fas fa-check"></i>
                </button>
<!--              </div>-->
              </div>
            </b-col>
          </b-row>
        </b-card>

      </b-card-text>


    </b-card>

    <!--    Edit Modal -->
    <div v-if="modalShow" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
      <div>
        <div class="relative mx-auto">
          <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
            <div class="text-2xl font-bold text-center">Edit this job</div>
            <form @submit="onSubmit" @reset="onReset" v-if="show"
                  class="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Job title</label>
                <!--              Alert-->
                <div v-if="dateError!=''" class="flex items-center bg-red-300 text-white text-sm font-bold px-4 py-3 mb-4"
                     role="alert">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
                  </svg>
                  <p>{{ dateError }}</p>
                </div>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" v-model="form.title" required type="text" placeholder="Enter job title">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Job description</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" v-model="form.description" required type="text"
                    placeholder="Enter job description">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Job date (YYYY-MM-DD)</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date" v-model="form.date" required type="text" placeholder="Enter job date (YYYY-MM-DD)">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="payment">Payment amount</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="payment" v-model="form.payment" required type="text" placeholder="Enter payment">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">City</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city" v-model="form.city" required type="text" placeholder="Enter your city">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address" v-model="form.address" required type="text" placeholder="Enter your address">
              </div>

              <div class="mb-4 hidden">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="id">Job id</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id" v-model="form.id" required>
              </div>
              <div class="flex items-center justify-between">
                <button
                    class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="reload()" type="button">
                  Close
                </button>
                <button
                    class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 m-1 rounded focus:outline-none focus:shadow-outline right"
                    type="reset">
                  Reset
                </button>
                <button
                    class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline right"
                    type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    <!--        Modal viewing applications    -->
    <div v-if="toggleModalApplication"
         class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center">
      <div class="relative mx-auto ">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
          <div class="text-2xl font-bold text-center">View all applications</div>
          <b-card class="text-secondary" v-bind:key="application.id" v-for="(application, index) in applications">
            <b-row class="text-center align-items-center">
              <b-col>
                <b-button v-b-toggle.sidebar-no-header @click="loadApplicantProfile(application)"
                          class="text-white rounded-full p-2 px-3 bg-purple-500">View Profile
                </b-button>
              </b-col>
              <b-col>{{ application.applicant.rating }}/ 10 <i class="far fa-star"></i></b-col>
              <b-col cols="5">{{ application.description }}</b-col>
              <b-col>
                <button @click="accept(application.id, application.job.id)"
                        class="text-white rounded-full p-2 px-3 bg-green-500">Accept
                </button>
              </b-col>
              <b-col>
                <button @click="decline(index, application.id)" class="text-white rounded-full p-2 px-3 bg-red-400">
                  Decline
                </button>
              </b-col>

            </b-row>
          </b-card>
          <button
              class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="toggleModalApplication = false" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
    <!--              End modal-->
  </div>
</template>

<script>

import moment from 'moment'
import api from "@/components/backend-api";

export default {
  name: 'JobCRUD',
  props: ["employeePosts"],
  components: {},
  data() {
    return {
      applications: [],
      applicant: '',
      applicantId: '',
      userId: '',
      image: '',
      userAppl: '',
      rating: '',
      toggleModalApplication: false,
      toggleModalRating: false,
      dateError: '',

      form: {
        title: '',
        description: '',
        date: '',
        payment: 0,
        city: '',
        address: '',
        user: {
          id: localStorage.getItem('user_id')
        },
        status: {
          id: 1
        }
      },

      show: true,
      modalShow: false
    }
  },

  methods: {
    getSkills() {
      let skills = []
      let allSkills = this.applicant.skills
      if(allSkills) {
        let res = allSkills.split(", ");
        res.forEach(skill => skills.push(skill))
      }
      return skills
    },
    reload() {
      this.modalShow = false;
      this.$forceUpdate();
    },
    onSubmit() {
      let dateFormatted = moment(String(this.form.date)).format('YYYY-MM-DD')
      if(this.form.date === "Invalid date") {
        this.dateError = "The date should be in format: YYYY-MM-DD"
      }else {
        let data = {
          id: this.form.id,
          title: this.form.title,
          description: this.form.description,
          date: dateFormatted,
          payment: this.form.payment,
          city: this.form.city,
          address: this.form.address,
          user: {
            id: localStorage.getItem('user_id')
          },
          status: {
            id: 1
          }
        }
        api.updateJob(data)
            .then(res => this.post = res.data)
            .catch(err => console.log(err));
        this.modalShow = false
      }
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
    openModalApplication() {
      this.toggleModalApplication = !this.toggleModalApplication;
    },
    editJob(job) {
      this.modalShow = !this.modalShow;
      this.form = job;
    },
    deleteJob(index, jobId) {
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
                this.employeePosts.splice(index, 1)
                api.deleteJob(jobId)
                    .then()
                    .catch(err => console.log(err));
              }
            }
          }
      )
    },
    getApplications(jobId) {
      this.applications = []
      api.getApplicationsByJobId(jobId)
          .then(res => {
            let unprocessedAppl = res.data
            unprocessedAppl.forEach(appl => {
              if (appl.status.id != 5) {
                this.applications.push(appl)
              }
            })
          })
          .catch(err => console.log(err));
      this.openModalApplication()
    },

    accept(applicationId, jobId) {
      api.updateStatusApplication(applicationId, 3)
          .then()
          .catch(err => console.log(err))
      // Change to in progress
      api.updateStatusJob(jobId, 4)
          .then()
          .catch(err => console.log(err))
      this.toggleModalApplication = !this.toggleModalApplication

    }
    ,
    decline(index, applicationId) {
      api.updateStatusApplication(applicationId, 5)
          .then()
          .catch(err => console.log(err))
      this.applications.splice(index, 1)
    },
    loadApplicantProfile(application) {
      api.getUser(application.applicant.id)
          .then(res => {
            this.userAppl = res.data
            if (!this.userAppl.image) {
              this.userAppl.image = 'https://carnivalkids.com/sites/default/files/product_images/dsc_0192_12.jpg'
            }
            this.applicant = application.applicant
          })
    },
    rateApplicant(job, rating){
      //TODO get applicant and update rating
      let applic = {}
      api.getApplicationsByJobId(job.id)
          .then(res => {
            let unprocessedAppl = res.data
            applic = unprocessedAppl.find(appl => appl.status.id === 3)
            console.log(applic)
            rating = parseInt(rating)
            console.log(rating)
            this.toggleModalRating = false
      api.updateRating(applic.applicant.id, rating)
      .then()
      .catch(err => console.log(err))
          })
          .catch(err => console.log(err));
      // Change to in completed
      api.updateStatusJob(job.id, 2)
          .then()
          .catch(err => console.log(err))
    },
  },

}
</script>

<style>
.color-primary {
  background-color: #4c58cf;
}

.color-secondary {
  color: #5b64c9 !important;
  background-color: #cccfed;
  border-color: #cccfed;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

a {
  color: #4c58cf;
}

a:hover {
  color: #4c58cf;
  border-style: none;
}

.card-header {
  background-color: #5b64c9;
}

.crudCard:hover {
  background-color: #cccfed;
  color: #333333 !important;
}

.scrolling {
  height: 20vw;
}



</style>
