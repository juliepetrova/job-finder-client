<template>
  <div>
    <div class="container emp-profile">
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
                Julie Marley
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
              <b-button class="btn-select w-100 active">Basic Information</b-button>
              <b-button class="btn-select w-100">Active Jobs</b-button>
              <b-button class="btn-select w-100">Past Jobs</b-button>
              <b-button class="btn-select w-100" @click="modalShow = !modalShow">Add job offer</b-button>
<!--              <p>WORK LINK</p>-->
<!--              <a href="">Website Link</a><br/>-->
<!--              <a href="">Bootsnipp Profile</a><br/>-->
<!--              <a href="">Bootply Profile</a>-->
<!--              <p>SKILLS</p>-->
<!--              <a href="">Web Designer</a><br/>-->
<!--              <a href="">Web Developer</a><br/>-->
<!--              <a href="">WordPress</a><br/>-->
<!--              <a href="">WooCommerce</a><br/>-->
<!--              <a href="">PHP, .Net</a><br/>-->
            </div>
          </div>
          <b-modal v-model="modalShow"><CreateJob></CreateJob></b-modal>
            <b-card class=" col-md-7"  header-tag="nav">
              <template v-slot:header>
            <b-nav card-header tabs>
              <b-nav-item class="color-secondary" >Profile information</b-nav-item>
            </b-nav>
              </template>
            <div class="tab-content profile-tab" id="myTabContent">
               <div class="row">
                  <div class="col-md-6">
                    <label>Username</label>
                  </div>
                  <div class="col-md-6">
                    <p>julie123</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>Julie Marley</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>juliemarley@gmail.com</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Date of birth</label>
                  </div>
                  <div class="col-md-6">
                    <p>01-01-2000</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Country</label>
                  </div>
                  <div class="col-md-6">
                    <p>Netherlands</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>City</label>
                  </div>
                  <div class="col-md-6">
                    <p>Eindhoven</p>
                  </div>
                </div>
              </div>
            </b-card>
        </div>


      <div v-bind:key="employeePost.id" v-for="employeePost in employeePosts">
      <JobCRUD v-bind:employeePost="employeePost"></JobCRUD>
      </div>
    </div>

  </div>
</template>

<script>

import CreateJob from "@/components/createJob";
import JobCRUD from "@/components/jobCRUD";
import api from "@/components/backend-api";

export default {
  name: 'ProfilePageEmployer',
  components: {
    JobCRUD,
    CreateJob
  },
  data() {
    return {
      modalShow: false,
      employeePosts: [],
      userId: 1,

    }
  },
  methods: {},

  created(){
    api.getEmployeePosts(this.userId)
      .then(res => this.employeePosts = res.data)
      .catch(err => console.log(err));
  }
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
.profile-work{
  padding: 14%;
  margin-top: -15%;
}
.profile-work p{
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a{
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul{
  list-style: none;
}
.profile-tab label{
  font-weight: 600;
}
.profile-tab p{
  font-weight: 600;
  color: #0062cc;
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
