<template>
    <div class="card m-3 border-0 rounded-2xl shadow-md">
      <div class="rounded-xl text-white" :style="{ 'background-image': 'url(' + getImage()+ ')' }">
        <h1 class="pt-5 font-bold text-2xl">${{ jobPost.payment }}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,202.7C80,181,160,139,240,117.3C320,96,400,96,480,133.3C560,171,640,245,720,245.3C800,245,880,171,960,122.7C1040,75,1120,53,1200,48C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-4">{{ jobPost.title }}</div>

        <table class="table-auto text-left">
          <tbody>
          <tr>
            <td class="px-3 py-2 text-right"><i class="far fa-clock"></i></td>
            <td class=" py-2">{{ jobPost.date }}</td>
          </tr>
          <tr>
            <td class="px-3 py-2 text-right"><i class="fas fa-city"></i></td>
            <td class=" py-2">{{ jobPost.city }}</td>
          </tr>
          <tr>
            <td class="px-3 py-2 text-right"><i class="fas fa-map-marker-alt"></i></td>
            <td class="py-2">{{ jobPost.address }}</td>
          </tr>
          </tbody>
        </table>
        <button class="text-white m-2 p-2 rounded-2xl bg-gradient-to-r from-indigo-700	to-purple-900 text-l w-3/4" type="submit"><router-link :to="'/job/' + jobPost.id">
          <span class="text-xl text-white">View more</span></router-link></button>
      </div>
    </div>

</template>

<script>

export default {
  name: 'JobCard',
  props: ["jobPost"],
  data() {
    return {
      customColor: {
        'text-white': 'white',
        'background-color': this.getColor()
      }
    }

  },
  methods: {
    getColor() {
      let arrayColor = ["#77ACA2", "#C2AFF0", "#9191E9", "#457EAC", "#2D5D7B", "#468189", "#9DBEBB", "#84BCDA", "#313B72", "#7EE081", "#62A87C"]
      let min = 0
      let max = arrayColor.length
      let number = Math.floor(Math.random() * (max - min) + min);
      return arrayColor[number]
    },
    getImage() {
      let arrayImage = [
          "https://images.unsplash.com/photo-1498263382026-c65d01dad017?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlYnNpdGUlMjB3YWxscGFwZXJ8ZW58MHwwfDB8YmxhY2s%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1564715474258-a24341637496?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHdlYnNpdGUlMjB3YWxscGFwZXJ8ZW58MHwwfDB8YmxhY2s%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1497294815431-9365093b7331?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlYnNpdGUlMjB3YWxscGFwZXJ8ZW58MHwwfDB8YmxhY2s%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYnNpdGUlMjB3YWxscGFwZXJ8ZW58MHwwfDB8YmxhY2s%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1494249465471-5655b7878482?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnNpdGUlMjB3YWxscGFwZXJ8ZW58MHwwfDB8YmxhY2s%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHxibGFjaw%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHxibGFjaw%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1576536245427-cd026cc5bdc3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA2fHx3ZWJzaXRlJTIwd2FsbHBhcGVyfGVufDB8MHwwfGJsdWU%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjU3fHx3ZWJzaXRlJTIwd2FsbHBhcGVyfGVufDB8MHwwfGJsdWU%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1485939420171-378de92ecd4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1529307482987-d09357b12fb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1570296273328-cd16499ba1d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA1fHx3ZWJzaXRlJTIwd2FsbHBhcGVyfGVufDB8MHwwfGJsdWU%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ]
      let min = 0
      let max = arrayImage.length
      let number = Math.floor(Math.random() * (max - min) + min);
      return arrayImage[number]
    }
  },

}

</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}

.card{
  width: 20vw;
}

.curved{
  color: white;
  background-color: #95B7DE;
}


</style>
