<template>
  <div>
    <Nav/>
    <router-view></router-view>
    <ul class="m-5">
   <li> <h5> So far the menu Jobs is implemented - there you can review all jobs in the database.</h5></li>
      <li> <h5>Also, under User -> My profile you can execute CRUD operations of Job model</h5></li>
      <li> <h5>User is up to be implemented in the next Sprint</h5></li>
      <li> <h5> All other menus are just for example</h5></li>
    </ul>
  </div>

</template>

<script>
import Nav from './components/layout/Nav'

export default {
  name: 'App',
  components: {
    Nav,
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
