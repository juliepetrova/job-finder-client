<template>
    <div class="card m-3 border-0 rounded-2xl">
      <div class="rounded-xl text-white" :style="{backgroundColor: getColor()}">
        <h1 class="py-4">${{ jobPost.payment }}</h1>
<!--              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">-->
<!--                <path fill="#fff" fill-opacity="1"-->
<!--                      d="M0,64L80,90.7C160,117,320,171,480,202.7C640,235,800,245,960,224C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>-->

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
