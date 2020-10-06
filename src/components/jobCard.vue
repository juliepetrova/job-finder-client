<template>
  <div class="jobCard">
      <b-card no-body class="card overflow-hidden m-4 shadow mb-5 bg-white rounded" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img class="map" src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="jobPost.title">
              <b-card-text class="text-left">
                Job Desciption {{jobPost.description}}
                <br>
                Date: 12-02-2020
                <br>
                Payment: {{jobPost.payment}}$
                <br>
                <a href="#" class="btn btn-outline-secondary btn-icon-right btnViewMore"><span>View more
<!--            <img src="https://www.iconsdb.com/icons/preview/color/4E22D0/arrow-33-xxl.png" height="24">-->
                </span></a>


              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
  </div>
</template>

<script>

 export default {
   name: 'JobCard',
   props: ["jobPost"],
   data () {
     return {

     }

   },
   methods: {

     },

 }

</script>

<style scoped>
.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.card{
  padding: 0;
  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.btnViewMore {
  padding:2px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0 12px 15px -4px rgba(12, 5, 62, 0.12);
  border: solid 1.2px #4e22d0;
  border-radius: 24px;
  color: #4e22d0;

}
.btnViewMore:hover {
  background: #4e22d0 ;
  box-shadow: 0 12px 15px -4px rgba(78, 34, 208, 0.3), 0 12px 15px -4px rgba(12, 5, 62, 0.15);
  color: #fff;
}
.map{
  object-fit: fill;
}


</style>
