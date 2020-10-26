<template>
  <div class="md:container mx-auto flex p-2 justify-between">
    <router-link to="/" class="lg:mr-8">
      <h2 class="p-4 text-gray-900 rounded-lg"><b>Boulot- Find your small job</b></h2>
    </router-link>
    <div class="flex">
      <router-link v-if="!isLoggedIn" to="/" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Home</h2>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/posts" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Jobs</h2>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Log in</h2>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="lg:mr-8">
        <h2 class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">Sign up</h2>
      </router-link>

      <div class="dropdown inline-block relative">
        <button
            class="bg-transparent p-4 text-gray-700 rounded-lg hover:bg-gray-300 inline-flex items-center">
          <span class="mr-1">More</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 ">
          <li class=""><router-link v-if="!isLoggedIn" to="/employer/myProfile" class="sm:mr-8">
            <h2 class="px-4 text-gray-700 rounded ">My profile Employer</h2>
          </router-link></li>
          <li class=""><router-link v-if="!isLoggedIn" to="/jobSeeker/myProfile" class="sm:mr-8">
            <h2 class="px-4 text-gray-700 rounded">My profile JobSeeker</h2>
          </router-link></li>
          <li class=""><router-link v-if="!isLoggedIn" to="/employer/myProfile" class="sm:mr-8">
            <h2 class="px-4 text-gray-700 rounded">Log out</h2>
          </router-link></li>

        </ul>
      </div>

    </div>
<!--    <b-navbar toggleable="lg" type="dark" class="nav bg-indigo-700">-->
<!--      <b-navbar-brand href="/">Boulot - Find your small job</b-navbar-brand>-->

<!--      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--      <b-collapse id="nav-collapse" is-nav>-->
<!--        <b-navbar-nav>-->
<!--          <router-link to="/" class="lg:mr-8">-->
<!--            <p class="text-light">Home</p>-->
<!--          </router-link>-->
<!--          <router-link to="/posts" class="lg:mr-8">-->
<!--            <p class="text-light">Jobs</p>-->
<!--          </router-link>-->

<!--        </b-navbar-nav>-->

<!--        &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--        <b-navbar-nav class="ml-auto">-->
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search location"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 mr-3 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->
<!--          <router-link to="/login" class="lg:mr-8">-->
<!--            <p class="text-light">Log In</p>-->
<!--          </router-link>-->
<!--          <router-link to="/signup" class="lg:mr-8">-->
<!--            <p class="text-light">Sign Up</p>-->
<!--          </router-link>-->


<!--          <b-nav-item-dropdown right>-->
<!--            &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--            <template v-slot:button-content>-->
<!--              <em>User</em>-->
<!--            </template>-->
<!--            <b-dropdown-item><router-link to="/employer/myProfile" class="lg:mr-16">-->
<!--              <span class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">My profile</span>-->
<!--            </router-link></b-dropdown-item>-->
<!--            <b-dropdown-item><router-link to="/jobSeeker/myProfile" class="lg:mr-16">-->
<!--              <span class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">My profile Job Seeker</span>-->
<!--            </router-link></b-dropdown-item>-->

<!--            <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
<!--        </b-navbar-nav>-->
<!--      </b-collapse>-->
<!--    </b-navbar>-->
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data() {
    return {
      isLoggedIn: false,
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
