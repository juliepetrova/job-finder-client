<template>
  <div>
    <div class=" emp-profile">
      <div class="row">
        <div class="col-md-3">
          <div class="profile-img mb-5 h-64">
            <img class="object-contain"
                 :src=" personalInfo.image "
                 alt="ProfileImage"/>
            <button v-if="!editImage" @click="editImage = !editImage"
                    class="file rounded-full flex shadow-xl bg-gray-200 p-2">
              <i class="far fa-edit text-gray-700"></i>
            </button>
            <div v-if="editImage" class="flex mt-1 mb-4">
              <input
                  class="w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                  v-model="personalInfo.image" type="text">
              <button @click="saveImage"
                      class="ml-2 btn-select bg-gradient-to-r from-indigo-700	to-purple-900 hover:bg-purple-700 p-2 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                <i class="fas fa-check"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="profile-head">
            <h3 class="text-2xl pt-3 pl-3">
              {{ personalInfo.first_name }} {{ personalInfo.last_name }}
            </h3>
            <div class="bg-gradient-to-r from-indigo-700	to-purple-900 mt-5 ml-4 w-32 h-32">
              <h2 class="text-gray-200 text-center pt-4">Total jobs given:</h2>
              <h1 class="text-center text-2xl pt-3 text-indigo-200">{{ employeePosts.length }}</h1>
            </div>

          </div>
        </div>
        <div class="col-md-5">
          <h2 class="pl-5">Posted jobs</h2>
          <line-chart :data="chartData"></line-chart>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="categories ">
            <b-button class="btn-select w-100 bg-gradient-to-r from-indigo-700	to-purple-900" @click="state = 1">Basic
              Information
            </b-button>
            <b-button class="btn-select w-100 bg-gradient-to-r from-indigo-700	to-purple-900" @click="state=2">Active
              Jobs
            </b-button>
            <b-button class="btn-select w-100 bg-gradient-to-r from-indigo-700	to-purple-900" @click="state=3">Past
              Jobs
            </b-button>
            <b-button class="btn-select w-100 bg-gradient-to-r from-indigo-700	to-purple-900"
                      @click="modalShow = !modalShow">Add job offer
            </b-button>
          </div>
        </div>
        <CreateJob @closeModal="closeModal" v-bind:modalShow="modalShow"></CreateJob>
        <PersonalInformation v-if="state===1" v-bind:personalInfo="personalInfo"></PersonalInformation>
        <JobCRUD v-if="state===2" v-bind:employeePosts="employeePosts"></JobCRUD>
        <PastJobs v-if="state===3"></PastJobs>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/layout/Footer";
import CreateJob from "@/components/employer/createJob";
import JobCRUD from "@/components/employer/jobCRUD";
import PersonalInformation from "@/components/personalInformation";
import PastJobs from "@/components/employer/pastJobs";
import api from "@/components/backend-api";


export default {
  name: 'ProfilePageEmployer',
  components: {
    Footer,
    JobCRUD,
    CreateJob,
    PersonalInformation,
    PastJobs
  },
  data() {
    return {
      state: 1,
      modalShow: false,
      personalInfo: [],
      editImage: false,
      employeePosts: [],
      chartData: {}
    }
  },
  methods: {
    closeModal(e) {
      this.modalShow = e;
      console.log(e);
    },
    saveImage() {
      this.editImage = false
      api.updateUser(this.personalInfo);
    },
    getJobs() {
      api.getEmployeePosts(localStorage.getItem('user_id'))
          .then(res => {
            this.employeePosts = res.data
            this.getStatistics(res.data)
          })
          .catch(err => console.log(err));
    },
    getStatistics(posts) {
      let stats = {}
      posts.forEach(job => {
        stats[job.date] = job.payment
      })
      this.chartData = stats
    }
  },
  created() {
    let user_id = localStorage.getItem("user_id");
    api.getUser(user_id)
        .then(res => {
          this.personalInfo = res.data
          if (!this.personalInfo.image) {
            this.personalInfo.image = 'https://carnivalkids.com/sites/default/files/product_images/dsc_0192_12.jpg'
          }
          this.getJobs()
        })
        .catch(err => console.log(err));
  },

}
</script>

<style scoped>
body {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.emp-profile {
  padding: 1%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}

.profile-img {
  text-align: center;
}

.profile-img img {
  width: 100%;
  height: 100%;
}

.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}

.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}

.profile-head h5 {
  color: #333;
}

.profile-head h6 {
  color: #0062cc;
}

.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}

.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}

.profile-head .nav-tabs {
  margin-bottom: 5%;
}

.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}

.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}

.btn-select {
  padding-bottom: 5%;
  padding-top: 5%;
  color: #fff;
  border-color: #5b64c9;
  border-radius: 0px;
}

.btn-select:hover, .btn-select.active {
  color: #5b64c9;
  background-color: #cccfed;
  border-color: #cccfed;
}

.card-header {
  background-color: #5b64c9;
}

.card {
  border: 0px;
}

.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -10%;
  padding: 22px;
  font-size: 25px;
  background: transparent;
}
</style>
