<template>
  <div>
    <Nav/>
    <router-view></router-view>
    <SideMenu></SideMenu>
    <JobPosts></JobPosts>
    <JobCRUD></JobCRUD>
  </div>

</template>

<script>
import Nav from './components/layout/Nav'
import JobPosts from './components/jobPosts.vue'
import JobCRUD from './components/jobCRUD.vue'
import SideMenu from './components/layout/SideMenu'

export default {
  name: 'App',
  components: {
    Nav,
    JobPosts,
    JobCRUD,
    SideMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
