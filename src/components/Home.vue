<template>
  <div class="m-0 p-0 ">
    <!--    Whole screen image with a search bar and title above-->

    <div class="m-0 p-0 home w-full flex justify-content-center align-items-center">
      <div>
        <div><h1 class="text-center p-4 font-comfortaa text-5xl text-white font-bold">Welcome to Boulot</h1></div>
        <div><h2 class="p-4 font-comfortaa text-2xl text-white">We'll help you find the perfect small job for you.</h2>
        </div>
        <!--Search-->
        <div class="bg-white flex items-center rounded-full shadow-xl">
          <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search"
                 type="text" placeholder="Enter a city or ZIP code" v-model="city">
          <div class="px-4">
            <router-link :to="'/posts/' + city">
              <button class="text-white rounded-full focus:outline-none flex items-center justify-center">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                     viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                     width="512px" height="512px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
              </button>
            </router-link>
          </div>

        </div>

      </div>
    </div>
    <!-- Title   -->
    <div id="title" class="mt-5 flex flex-col justify-content-center align-items-center">
      <h1 class="row text-center font-comfortaa text-xl">Finding a small job has never been easier. <br> Finding help
        for your small tasks has never been simpler.</h1>
      <br>
      <div class="row separation-line mt-5"></div>
      <br>
    </div>
    <div class="row flex justify-content-center">
      <div
          class=" m-3  mx-5 p-4 border-4 border-indigo-200 bg-indigo-50 rounded-full w-56 h-56 shadow-md hover:shadow-2xl">
        <h2 class="text-gray-600 text-center pt-4">All jobs</h2>
        <h1 class="text-center text-4xl mt-1 pt-4 text-indigo-400">{{ statistics.allJobs }}</h1>
      </div>
      <div
          class=" m-3  mx-5 p-4 border-4 border-indigo-200 bg-indigo-50 rounded-full w-56 h-56 shadow-md hover:shadow-2xl">
        <h2 class="text-gray-600 text-center pt-4">Most popular city</h2>
        <h1 class="text-center text-3xl mt-2 pt-4 text-indigo-500"> {{ statistics.mostPopularCity }}</h1>
      </div>
      <div
          class=" m-3  mx-5 p-4 border-4 border-indigo-200 bg-indigo-50 rounded-full w-56 h-56 shadow-md hover:shadow-2xl">
        <h2 class="text-gray-600 text-center pt-4">Total money earned</h2>
        <h1 class="text-center text-4xl mt-1 pt-4 text-indigo-600">{{ statistics.totalEarnings }} €</h1>
      </div>
    </div>
    <div class="row separation-line mt-5"></div>

    <!--    Two cards representing the different roles in the website-->
    <div class="m-5 pt-5 ">
      <div class="row flex justify-content-center ">
        <div class="col-md-3 m-3 p-4 shadow card border-0 rounded">
          <div class="flex justify-center align-items-center">
            <img class="" src="https://image.freepik.com/free-vector/job-hunt-concept-illustration_114360-436.jpg">
          </div>
          <div class="text">
            <h2 class="pt-3  pb-2 text-center text-lg">Register as a Job Seeker</h2>
            <span class="text-gray-500">
              A job seeker profile allows you to access and apply all jobs
              posted on the website. You can review and cancel your applications
              at any moment, before they are approved.
            </span>
          </div>
          <div class="row flex justify-content-center mt-3">
            <button class="text-white m-2 p-2 rounded-2xl bg-gradient-to-r from-indigo-600	to-purple-800 text-l w-1/2">
              <router-link to="/signup">
                <p class="text-light">Sign Up</p>
              </router-link>
            </button>

          </div>
        </div>
        <div class="col-md-3 m-3 ml-5 p-4 border-0 shadow card rounded">
          <div class="flex justify-center align-items-center">
            <img class="py-12" src="https://image.freepik.com/free-vector/online-job-interview_23-2148644500.jpg">
            <!--            <img class="py-10" src="https://image.freepik.com/free-vector/online-job-interview_23-2148644501.jpg">-->
          </div>
          <div class="text">
            <h2 class="mt-5 py-2 text-center text-lg">Register as an Employer</h2>
            <span class="text-gray-500">
              An employer profile allows you to post unlimited amount of jobs
              and have access to all applications so you can find the ideal candidate for the desired job.
            </span>
          </div>
          <div class="row flex justify-content-center mt-3">
            <button class="text-white m-2 p-2 rounded-2xl bg-gradient-to-r from-indigo-600	to-purple-800 text-l w-1/2">
              <router-link to="/signup">
                <p class="text-light">Sign Up</p>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from "@/components/layout/Footer";
import api from "@/components/backend-api";

export default {
  name: "Home",
  components: {Footer},
  data() {
    return {
      statistics: '',
      city: '',
    }
  },
  created() {
    api.getHomePageStatistics()
        .then(res => this.statistics = res.data)
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>

.home {
  height: 45vw;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1549848078-869074eb2e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  /*background-image: url("https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80");*/
  /*background-image: url("https://images.unsplash.com/photo-1550949266-3a0da86fc5bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");*/

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.separation-line {
  background-color: #ffd237;
  height: 2px;
  width: 240px;
  margin: auto;
}

</style>
