<template>
  <div class="font-comfortaa">
    <Nav/>
    <router-view></router-view>
    <!--    <Footer class="mt-16"/>-->
  </div>

</template>

<script>
import Nav from './components/layout/Nav'
// import Footer from "./components/layout/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    // Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

body. html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
