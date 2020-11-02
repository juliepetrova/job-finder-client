<template>
  <div class="background min-h-screen">
    <div class="container flex-column mt-8">
      <div class="flex p-16 pb-0">
        <div class="w-1/2 text-xl">
          <div class="text-5xl font-bold mb-16"> {{ job.title }}</div>
          <div class="p-2 pb-4"><i class="fas fa-euro-sign"></i> {{ job.payment }} euro</div>
          <div class="p-2 pb-4"><i class="fas fa-map-marker-alt"></i> {{ job.city }}, {{ job.address }}</div>

          <div class="p-2 pb-4"><i class="fas fa-calendar-day"></i> {{ job.date }}</div>
          <div class="p-2"><i class="fas fa-comment-medical"></i> {{ job.description }}</div>
        </div>
        <div class="w-1/2 mt-2 ml-24">
          <div class="flex">
            <div class="w-1/4">
              <img class="rounded-full h-20 w-20 object-cover"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                   alt="ProfileImage"/>
            </div>
            <div class="text-2xl"> Offered by: <br> <b>{{ user.first_name }} {{ user.last_name }} </b></div>
          </div>
        </div>
      </div>
      <div class="flex ">
        <div class="w-1/2"></div>
        <div class="ml-16 w-56 ">
          <button
              class="text-white text-xl tracking-wide m-2 py-3 rounded-full bg-gradient-to-r from-indigo-700	to-purple-900 text-l w-full">
            <router-link :to="'/apply/' + job.id">
              <span class="text-xl text-white">Apply</span></router-link>
          </button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import api from "@/components/backend-api";


export default {
  name: 'Job',
  data() {
    return {
      job: [],
      user: [],
    }
  },
  created() {
    api.getJob(this.$route.params.job_id)
        .then(res => this.job = res.data)
        .catch(err => console.log(err));
    api.getUserByJob(this.$route.params.job_id)
        .then(res => this.user = res.data)
        .catch(err => console.log(err));
  }

}
</script>

<style scoped>
.background {
  background-image: url("../assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
