<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav bg-indigo-700">
      <b-navbar-brand href="#">Boulot - Find your small job</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/posts" class="lg:mr-16">
            <p class="text-light">Jobs</p>
          </router-link>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search location"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <router-link to="/login" class="lg:mr-16">
            <p class="text-light">Log In</p>
          </router-link>
          <router-link to="/signup" class="lg:mr-16">
            <p class="text-light">Sign Up</p>
          </router-link>


          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item><router-link to="/employer/myProfile" class="lg:mr-16">
              <span class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">My profile</span>
            </router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/jobSeeker/myProfile" class="lg:mr-16">
              <span class="p-4 text-gray-700 rounded-lg hover:bg-gray-300">My profile Job Seeker</span>
            </router-link></b-dropdown-item>

            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Nav'
}

</script>

<style scoped>
.nav {
  color: #fff;
  /*background-color: #1F3095;*/
}
</style>
