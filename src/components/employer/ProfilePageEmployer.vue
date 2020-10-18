<template>
  <div>
    <div class=" emp-profile">
        <div class="row">
          <div class="col-md-3">
            <div class="profile-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="ProfileImage"/>
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="profile-head">
              <h3>
                {{ personalInfo.first_name }} {{personalInfo.last_name}}
              </h3>

              <p class="proile-rating">Rates : <span>8/10</span></p>
              <p class="proile-rating">Jobs Given : <span>19</span></p>
              <p class="proile-rating">Money spent : <span>300$</span></p>
            </div>
          </div>
<!--          <div class="col-md-2">-->
<!--            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>-->
<!--          </div>-->
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="categories">
              <b-button class="btn-select w-100" @click="state = 1">Basic Information</b-button>
              <b-button class="btn-select w-100" @click="state=2">Active Jobs</b-button>
              <b-button class="btn-select w-100">Past Jobs</b-button>
              <b-button class="btn-select w-100" @click="modalShow = !modalShow">Add job offer</b-button>
            </div>
          </div>
          <CreateJob @closeModal="closeModal" v-bind:modalShow="modalShow"></CreateJob>
          <PersonalInformation v-if="state===1" v-bind:personalInfo="personalInfo"></PersonalInformation>
          <JobCRUD v-if="state===2"></JobCRUD>
        </div>

    </div>

  </div>
</template>

<script>

import CreateJob from "@/components/employer/createJob";
import JobCRUD from "@/components/employer/jobCRUD";
import PersonalInformation from "@/components/personalInformation";
import api from "@/components/backend-api";


export default {
  name: 'ProfilePageEmployer',
  components: {
    JobCRUD,
    CreateJob,
    PersonalInformation,
  },
  data() {
    return {
      state: 1,
      modalShow: false,
      personalInfo: []
    }
  },
  methods: {
    closeModal(){
      this.modalShow = false;
    }

  },
  created(){
    let user_id = 1;
    api.getUser(user_id)
        .then(res => this.personalInfo = res.data)
        .catch(err => console.log(err));
  },

}
</script>

<style scoped>
body{
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile{
  padding: 1%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img{
  text-align: center;
}
.profile-img img{
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
.profile-head h5{
  color: #333;
}
.profile-head h6{
  color: #0062cc;
}

.proile-rating{
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span{
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs{
  margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
  font-weight:600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active{
  border: none;
  border-bottom:2px solid #0062cc;
}

.btn-select {
  padding-bottom: 5%;
  padding-top: 5%;
  color: #fff;
  background-color: #5b64c9;
  border-color: #5b64c9;
  border-radius: 0px;
}

.btn-select:hover, .btn-select.active{
  color: #5b64c9;
  background-color: #cccfed;
  border-color: #cccfed;
}
.card-header{
  background-color: #5b64c9;
}

.card{
  border: 0px;
}
/*.btn-try{*/
/*  color: #fff;*/
/*  background-color:  #4c58cf;*/
/*  border-color:  #4c58cf;*/

/*}*/


</style>
