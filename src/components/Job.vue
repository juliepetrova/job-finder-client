<template>
  <div class="background min-h-screen">
    <div class="container flex-column mt-8">

<!--      Apply now-->
      <b-alert v-model="showDismissibleAlert" variant="success" class="text-center" dismissible>
        Application sent successfully!
      </b-alert>
      <b-alert v-model="showAlert" variant="danger" class="text-center" dismissible>
        You have to be logged in to proceed!
      </b-alert>
      <div class="flex justify-center">
          <button @click='openModal'
              class="text-white text-xl focus:outline-none tracking-wide m-2 py-4 px-56 rounded-full bg-gradient-to-r from-indigo-700 to-purple-900 hover:from-indigo-800 hover:to-purple-700 active:border-0 ">
            <span class="text-xl text-white">Apply</span>
          </button>
      </div>
      <!--        Modal       -->
      <div v-if="toggleModal"
           class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
        <div class="relative mx-auto w-1/3">
          <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
            <div class="text-2xl font-bold text-center">Apply for this job</div>
            <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 text-center">
              <h2 class="text-xl pb-4">Please tell us why are you suitable for the job?</h2>
              <h4 class="pb-2 text-gray-600">This information will be used for your employer to choose you for this job. </h4>
              <div class="mb-4">
<!--                <label class="block text-gray-700 text-sm font-bold mb-2"-->
<!--                       for="name">-->
<!--                  Employee first name-->
<!--                </label>-->
                <textarea
                    class="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" v-model="description" required rows="9" cols="50"
                    type="text" placeholder="..."></textarea>
              </div>

              <div class="flex items-center justify-between">
                <button
                    class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="toggleModal = false" type="button">
                  Close
                </button>
                <button
                    @click="apply()"
                    class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right"
                    type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--              End modal-->

      <div class="flex py-16 pb-0 ">
        <div class="w-6/12 text-xl rounded-3xl shadow p-16 pt-12 pb-20 mr-5 ">
          <div class="text-5xl font-bold mb-3 text-center"> {{ job.title }}</div>
          <div class="text-2xl text-center pb-4 font-bold "><h4 class="rounded-2xl shadow-md inline-block p-2 px-4 bg-red-200">{{ job.payment }} <i class="fas fa-euro-sign "></i></h4> </div>
          <div class="p-2 py-4"><i class="fas fa-map-marker-alt"></i> {{ job.city }}, {{ job.address }}</div>

          <div class="p-2 pb-4"><i class="fas fa-calendar-day"></i> {{ job.date }}</div>
          <div class="p-2"><i class="fas fa-comment-medical"></i> {{ job.description }}</div>
        </div>
        <div class="w-5/12 mt-2 ml-24 rounded-3xl shadow-inner p-4 px-16 ">
<!--          <div class="flex">-->
            <div class="mx-auto mb-4">
              <img class="rounded-full h-32 w-32 object-cover mx-auto"
                   :src=" user.image "
                   alt="ProfileImage"/>
            </div>
            <div class="text-2xl text-center"> Offered by: <br> <b>{{ user.first_name }} {{ user.last_name }} </b></div>
            <div class="flex pt-4 px-4">
              <div class="text-xl text-center pb-4 font-bold text-gray-900 "><h4 class="rounded-full h-16 w-20 shadow-xl inline-block py-3  bg-red-300">18 </h4> </div>
              <h4 class="text-center text-xl text-gray-900 p-3 px-4 ">Jobs posted</h4>
            </div>
          <div class="flex py-2 px-4">
            <div class="text-xl text-center pb-4 font-bold text-gray-900 "><h4 class="rounded-full h-16 w-20 shadow-xl inline-block py-3  bg-red-400">260 </h4> </div>
            <h4 class="text-center text-xl text-gray-900 p-3 px-4">Total euro payed</h4>
          </div>
          <div class="flex py-2 px-4">
            <div class="text-xl text-center pb-4 font-bold text-gray-900 "><h4 class="rounded-full h-16 w-20 shadow-xl inline-block py-3  bg-red-500">4.5/5 </h4> </div>
            <h4 class="text-center text-xl text-gray-900 p-3 px-4">Average rating</h4>
          </div>
<!--          </div>-->
        </div>
        <div class="w-1/12 mt-2"><div></div></div>
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
      toggleModal: false,
      description: '',
      job: [],
      user: [],
      showDismissibleAlert: false,
      showAlert: false,
      application: {}
    }
  },
  methods: {
    openModal() {
      const role = localStorage.getItem("role");
      console.log(role)
      if (role && role==="SEEKER") {
        this.toggleModal = !this.toggleModal;
        this.description = ""
      }else {
        //TODO Notify user he has to be logged in
        // this.$router.push('/login')
        this.showAlert = true;
      }
    },
    apply(){
      let data = {
        description: this.description,
        date: new Date().toLocaleString(),
        applicant: {
          id: localStorage.getItem("user_id")
        },
        job:{
          id: this.job.id
        },
        status: {
          id: 1
        }
      }
      let resp = JSON.stringify(data);
      console.log(resp)
      api.apply(resp)
          .then(res => this.application = res.data)
          .catch(err => console.log(err));
      this.toggleModal = false
      this.showDismissibleAlert = true
      this.$emit('closeModal', 'false')
    }
  },
  created() {
    api.getJob(this.$route.params.job_id)
        .then(res => this.job = res.data)
        .catch(err => console.log(err));
    api.getUserByJob(this.$route.params.job_id)
        .then(res => {this.user = res.data
          if (!this.user.image){
            this.user.image = 'https://carnivalkids.com/sites/default/files/product_images/dsc_0192_12.jpg'
          }})
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
