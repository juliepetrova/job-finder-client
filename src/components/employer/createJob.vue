<template>
  <div v-if="modalShow" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
    <div>
      <div class="relative mx-auto">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
          <div class="text-2xl font-bold text-center">Edit this job</div>
          <form @submit="onSubmit" @reset="onReset" v-if="show"
                class="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Job title</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" v-model="form.title" required type="text" placeholder="Enter job title">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Job description</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="description" v-model="form.description" required type="text" placeholder="Enter job description">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Job date</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="date" v-model="form.date" required type="text" placeholder="Enter job date">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="payment">Payment amount</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="payment" v-model="form.payment" required type="text" placeholder="Enter payment">
            </div>             <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="city">City</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="city" v-model="form.city" required type="text" placeholder="Enter your city">
          </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="address" v-model="form.address" required type="text" placeholder="Enter your address">
            </div>

            <div class="flex items-center justify-between">
              <button
                  class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  @click="closeModal()" type="button">
                Close
              </button>
              <button
                  class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 m-1 rounded focus:outline-none focus:shadow-outline right"
                  type="reset">
                Reset
              </button>
              <button
                  class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline right"
                  type="submit">
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/components/backend-api";

export default {
  props: ["modalShow"],
  data() {
    return {
      form: {
        title: '',
        description: '',
        date: '',
        payment: 0,
        city: '',
        address: '',
        user: {
          id: 1
        },
        status: {
          id: 1
        }
      },
      show: true,
      post: []
    }
  },
  methods: {
    onSubmit() {
      let resp = JSON.stringify(this.form);
      api.saveJob(resp)
      .then(res => this.post = res.data)
      .catch(err => console.log(err));
      this.modalShow = false;
      this.$emit('closeModal', 'false')
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      this.form.date = ''
      this.form.payment = 0
      this.form.city = ""
      this.form.address = ""
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    closeModal(){
      this.modalShow = false;
      this.$emit('closeModal', false)
    }

  }
}
</script>

<style scoped>
.color-primary{
  background-color: #4c58cf;
}
</style>
