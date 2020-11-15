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
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
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
