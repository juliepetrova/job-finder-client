<template>
  <div>

    <div class="flex justify-center text-center">
      <div class="m-12 w-1/3">
        <h2></h2>
        <div class="below-title links">
          <span>You are logged in as the admin of this website!</span>
        </div>
      </div>
    </div>

    <Reports v-bind:reports="reports"></Reports>
  </div>
</template>

<script>
import Reports from "@/components/admin/Reports"
import api from "@/components/backend-api"

export default {
  name: 'DashboardAdmin',
  components: {
    Reports
  },
  data(){
    return {
      reports: []
    }
  },
  created() {
    api.getReports()
    .then(res => this.reports = res.data)
        .catch(err => console.log(err));  }
}
</script>

<style scoped>


.links {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.below-title {
  border-top: dotted 1px #999;
  border-bottom: dotted 1px #999;
  padding-top: 10px;
  padding-bottom: 10px;
  color: darkgray;
  font-size: smaller;
}


h2 {
  font-size: 35px;
  line-height: 1.4em;
}
</style>
