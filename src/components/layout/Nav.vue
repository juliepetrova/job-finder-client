<template>
  <div class="md:container mx-auto flex p-2 justify-between">
    <router-link to="/" class="lg:mr-8">
      <h2 class="p-4 text-gray-900 rounded-lg"><b>Boulot- Find your small job</b></h2>
    </router-link>
    <div class="flex">
      <router-link to="/" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Home</h2>
      </router-link>
      <router-link to="/posts" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Jobs</h2>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Log in</h2>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Sign up</h2>
      </router-link>

      <div v-if="isLoggedIn" class="dropdown inline-block relative">
        <button
            class="bg-transparent p-4 text-gray-700 rounded-lg hover:bg-gray-300 inline-flex items-center">
          <span class="mr-1">More</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 ">
          <li class="">
            <router-link v-if="isLoggedIn" to="/employer/myProfile" class="sm:mr-8">
              <h2 class="px-4 text-gray-700 rounded ">My profile Employer</h2>
            </router-link>
          </li>
          <li class="">
            <router-link v-if="isLoggedIn" to="/jobSeeker/myProfile" class="sm:mr-8">
              <h2 class="px-4 text-gray-700 rounded">My profile JobSeeker</h2>
            </router-link>
          </li>

          <div v-if="isLoggedIn" class="sm:mr-4">
            <button @click.prevent="logout" class="px-4 text-gray-700 rounded align-middle">Log
              Out
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    // role: () => {
    //   return localStorage.getItem('role');
    // }
  },
  methods: {

    logout: function () {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  }
}

</script>

<style scoped>
.nav {
  color: gray;
}

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

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
