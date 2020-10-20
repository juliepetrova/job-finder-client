<template>
  <div class="jobs">
    <div class="curved bg-indigo-700">
      <h1>Boulot</h1>
      <p> We'll help you find the ideal next small job</p>
<!--      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">-->
<!--        <path fill="#fff" fill-opacity="1"-->
<!--              d="M0,64L80,90.7C160,117,320,171,480,202.7C640,235,800,245,960,224C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>-->
      <svg class="nectar-shape-divider" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path d="M 0 45.86 h 458 c 29 0 42 19.27 42 19.27 s 13 -19.27 42.74 -19.27 h 457.26 v 54.14 h -1000 z"></path>  </svg>
    </div>
<!--    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--         preserveAspectRatio="xMidYMid meet" viewBox="-1 287.1475180685442 644 156.52511836784203"-->
<!--         width="100%" ><defs>-->
<!--      <path d="M640 288.15C637.24 301.79 629.51 314.82 616.8 327.25C598.5 345.14 574.37 364.02 515.56 369.45C489.02 371.91 399.49 365.67 357.52 385.28C335.41 395.61 320.77 414.07 313.61 440.67C307.5 413.24 293.75 394.77 272.33 385.28C223.54 363.65 119.39 372.8 99.27 369.45C62.59 363.36 52.54 354.51 35.47 342.93C14.6 328.77 2.78 310.51 0 288.15L0 288.15" id="adEr2pboB"></path>-->
<!--    </defs><g><g><g><use xlink:href="#adEr2pboB" opacity="1" fill-opacity="" stroke="#ff3c00" fill="ff3c00"-->
<!--                         stroke-width="1" stroke-opacity="1"></use></g></g></g></svg>-->
  <SideMenu></SideMenu>
    <h3 class="text-center"> Available jobs</h3>

    <b-card-group class="m-5 text-center d-flex justify-content-center">

      <div v-bind:key="jobPost.id" v-for="jobPost in jobPosts">
      <JobCard v-bind:jobPost="jobPost"></JobCard>
      </div>

    </b-card-group>
  </div>

</template>

<script>
import JobCard from './jobCard.vue'
import SideMenu from './layout/SideMenu'
import api from "@/components/backend-api";

export default {
  name: 'JobPosts',
  components: {
    JobCard,
    SideMenu,
  },

  data (){
    return{
      jobPosts: [],
    }
  },

  methods: {

  },

  created(){
    api.getJobPosts()
        .then(res => this.jobPosts = res.data)
        .catch(err => console.log(err));
  },
}

</script>

<style scoped>

.curved{
  /*background-color: #1F3095;*/
  color: white;
  text-align: center;
}
.curved h1{
  font-size: 6rem;
}
.curved svg {
  display: block;
}
</style>
