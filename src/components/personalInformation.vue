<template>
<b-card class="col-md-7" header-tag="nav">
<template v-slot:header>
  <b-nav card-header tabs>
    <b-nav-item class="color-secondary " >Profile information</b-nav-item>
    <div class="ml-48">
    <button v-if="editing"  @click="save(personalInfo)"
            class=" bg-blue-500 hover:bg-blue-700 text-white px-4 p-2 rounded-full shadow-md focus:outline-none ml-48">
      Save
    </button>
      <button v-if="!editing" @click="editing = !editing"
              class=" ml-48 bg-blue-500 hover:bg-blue-700 p-2 rounded-full shadow-md flex justify-center items-center focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 50 50"
             style=" fill:#ffffff;">
          <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
        </svg>
      </button>
    </div>
  </b-nav>

</template>
<div class="tab-content profile-tab" id="myTabContent">
<!--  <div class="row">-->
<!--    <div class="col-md-6">-->
<!--      <label>Username</label>-->
<!--    </div>-->
<!--    <div class="col-md-6">-->
<!--      <p>julie123</p>-->
<!--    </div>-->
<!--  </div>-->
  <div class="row">
    <div class="col-md-6">
      <label>Name</label>
    </div>
    <div v-if="!editing" class="info col-md-6">{{personalInfo.first_name}} {{personalInfo.last_name}}</div>
    <input class="w-1/2 col-md-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.first_name" type="text">
    <input class="w-1/2 col-md-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.last_name" type="text">
  </div>
  <div class="row">
    <div class="col-md-6">
      <label>Email</label>
    </div>
    <div v-if="!editing" class="col-md-6 info">{{ personalInfo.email }}</div>
    <input class="col-md-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.email" type="text">
  </div>
  <div class="row">
    <div class="col-md-6">
      <label>Phone</label>
    </div>
    <div v-if="!editing" class="col-md-6 info">{{ personalInfo.phone_number }}</div>
    <input class="col-md-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.phone_number" type="text">
  </div>
  <div class="row">
    <div class="col-md-6">
      <label>Date of birth</label>
    </div>
    <div v-if="!editing" class="col-md-6 info">{{personalInfo.date_of_birth}}</div>
    <input class="col-md-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.date_of_birth" type="text">
  </div>
  <div class="row">
    <div class="col-md-6">
      <label>Country</label>
    </div>
    <div v-if="!editing" class="col-md-6 info">{{ personalInfo.country }}</div>
    <input class="col-md-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.country" type="text">
  </div>
  <div class="row">
    <div class="col-md-6">
      <label>City</label>
    </div>
    <div v-if="!editing" class="col-md-6 info">{{ personalInfo.city }}</div>
    <input class="col-md-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           v-if="editing" v-model="personalInfo.city" type="text">
  </div>
</div>
</b-card>
</template>

<script>
import api from "@/components/backend-api";

export default {
  name: 'personalInfo',
    props: ["personalInfo"],
    data () {
      return {
        editing: false,
      }

    },
  methods: {
    save(personalInfo) {
      this.editing = false;
      console.log(this.personalInfo.first_name)
      api.updateUser(personalInfo);
    }
  }
}
</script>

<style scoped>
.profile-tab label{
  font-weight: 600;
}
.info{
  font-weight: 600;
  color: #0062cc;
}
</style>
