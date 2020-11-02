<template>
  <!--  <div class="jobCard">-->
  <!--      <b-card no-body class="card overflow-hidden m-4 shadow mb-5 bg-white rounded" style="max-width: 540px;">-->
  <!--        <b-row no-gutters>-->
  <!--          <b-col md="6">-->
  <!--            <b-card-img class="map" src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></b-card-img>-->
  <!--          </b-col>-->
  <!--          <b-col md="6">-->
  <!--            <b-card-body :title="jobPost.title">-->
  <!--              <b-card-text class="text-left">-->
  <!--                Job Desciption {{jobPost.description}}-->
  <!--                <br>-->
  <!--                Date: 12-02-2020-->
  <!--                <br>-->
  <!--                Payment: {{jobPost.payment}}$-->
  <!--                <br>-->
  <!--                <a href="#" class="btn btn-outline-secondary btn-icon-right btnViewMore"><span>View more-->
  <!--                </span></a>-->
  <!--              </b-card-text>-->
  <!--            </b-card-body>-->
  <!--          </b-col>-->
  <!--        </b-row>-->
  <!--      </b-card>-->
  <!--  </div>-->

    <div class="card m-3 border-0 rounded-2xl">
      <div class="curved rounded-xl">
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
    return {}

  },
  methods: {},

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
/*.card{*/
/*  padding: 0;*/
/*  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);*/
/*  background-repeat: no-repeat;*/
/*  background-position: right;*/
/*  background-size: 80px;*/
/*}*/

/*.btnViewMore {*/
/*  padding:2px;*/
/*  padding-left: 15px;*/
/*  padding-right: 15px;*/
/*  box-shadow: 0 12px 15px -4px rgba(12, 5, 62, 0.12);*/
/*  border: solid 1.2px #4e22d0;*/
/*  border-radius: 24px;*/
/*  color: #4e22d0;*/

/*}*/
/*.btnViewMore:hover {*/
/*  background: #4e22d0 ;*/
/*  box-shadow: 0 12px 15px -4px rgba(78, 34, 208, 0.3), 0 12px 15px -4px rgba(12, 5, 62, 0.15);*/
/*  color: #fff;*/
/*}*/
/*.map{*/
/*  object-fit: fill;*/
/*}*/

.curved{
  color: white;
  /*background-color: #0E3EC3;*/
  /*background-color: #00C6FB;*/
  background-color: #95B7DE;
}


</style>
