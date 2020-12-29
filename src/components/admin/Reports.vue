<template>
  <div class="dashboard">
    <vue-confirm-dialog></vue-confirm-dialog>
    <div class="p-4 flex justify-center items-start ">
      <div class="bg-white w-full md:max-w-6xl rounded-lg shadow">
        <div class="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          <div>
            <div class="text-xl font-bold text-gray-700">Job posts reports overview</div>
            <div class="text-sm font-base text-gray-500 py-2">Approve or reject submitted reports</div>
          </div>
        </div>
        <div class="px-6">

          <div class="flex items-center ml-6">
            <div class="ml-4 flex">
              <div class="font-semibold text-gray-600 mr-6">Jobs</div>
              <div class=" text-gray-600 mx-10">Date</div>
              <div class="font-light text-gray-500 ml-6">Report description</div>
            </div>
          </div>

          <div v-for="(report,index) in reports" :key="report.id"
               class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <div class="ml-4 flex">
                <div class="font-semibold text-gray-600 mr-6">
                  <router-link :to="'/job/' + report.job.id">
                    {{ report.job.title }}
                  </router-link>
                </div>
                <div class=" text-gray-600 mx-4">{{ report.date }}</div>
                <div class="font-light text-gray-500">{{ report.description }}</div>
              </div>
            </div>

            <div class="flex items-center">
              <button @click="markForReview(index,report.job.id)"
                      class="bg-green-300 hover:bg-green-400 p-2 m-2 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                Approve
              </button>

              <button @click="deleteReport(index,report.id)"
                      class="bg-red-400 hover:bg-red-500 p-2 m-2 rounded-full shadow-md flex justify-center items-center focus:outline-none">
                <svg class="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from "@/components/backend-api";

export default {
  name: 'Reports',
  props: ["reports"],
  data() {
    return {}
  },
  methods: {
    markForReview(index, jobId) {
      this.$confirm(
          {
            message: `This job will be marked for review. Please confirm your choice!`,
            button: {
              no: 'Cancel',
              yes: 'Yes'
            },
            callback: confirm => {
              if (confirm) {
                this.reports.splice(index, 1)
                api.updateStatusJob(jobId, 6)
                    .then(response => {
                      console.log(response.data)
                    })
                    .catch(error => {
                      console.log(error.message)
                    })
              }
            }
          }
      )
    },
    deleteReport(index, id) {
      this.$confirm(
          {
            message: `Are you sure you want to delete this review?`,
            button: {
              no: 'No',
              yes: 'Yes'
            },

            callback: confirm => {
              if (confirm) {
                this.reports.splice(index, 1, id)
                api.deleteReport(id)
                    .then(response => {
                      console.log(response.data)
                    })
                    .catch(error => {
                      console.log(error.message)
                    })
              }
            }
          }
      )
    },


  }
}
</script>

<style scoped>
</style>
