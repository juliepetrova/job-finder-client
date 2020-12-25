<template>
  <div class="dashboard">
    <vue-confirm-dialog></vue-confirm-dialog>
    <div class="min-h-screen p-4 flex justify-center items-start">
      <div class="bg-white w-full md:max-w-6xl rounded-lg shadow">
        <div class="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          <div>
            <div class="text-xl font-bold text-gray-700">Job posts reports overview</div>
            <div class="text-sm font-base text-gray-500">Approve or reject submitted reports</div>
          </div>
        </div>
        <div class="px-6">
          <div v-for="(report,index) in reports" :key="report.id"
               class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <div class="ml-4 flex">
                <div v-if="!editing" class="font-semibold text-gray-600 mr-6">{{report.job.title}}</div>
                <div v-if="!editing" class="font-light text-gray-500">{{report.description}}</div>
                <div v-if="!editing" class=" text-gray-600 ml-12">Building: {{report.date}}</div>
              </div>
            </div>

            <div class="flex items-center">
              <button @click="deleteBuildingOwner(index,report.id)"
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

export default {
  name: 'Reports',
  props: ["reports"],
  data() {
    return {
    }
  },
  methods: {
    markForReview(index, id) {
      this.$confirm(
          {
            message: `Are you sure?`,
            button: {
              no: 'No',
              yes: 'Yes'
            },
            /**
             * Callback Function
             * @param {Boolean} confirm
             */
            callback: confirm => {
              if (confirm) {
                this.reports.splice(index, 1, id)
                // TODO -> should also delete in users
                // axios.delete('/api/building_owner/' + id)
                //     .then(response => {
                //       console.log(response.data)
                //     })
                //     .catch(error => {
                //       console.log(error.message)
                //     })
              }
            }
          }
      )
    },


  }
}
</script>

<style scoped>
.toggle__dot {
  transition: all 0.3s ease-in-out;
}

</style>
