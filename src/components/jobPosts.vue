<template>
  <div class="jobs">
  <SideMenu></SideMenu>
    <h3 class="text-center"> Available jobs</h3>
    <b-card-group class="text-center d-flex justify-content-center">
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

</style>
