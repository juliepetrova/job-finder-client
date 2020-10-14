<template>
  <div class="main">
    <div class="login d-flex justify-content-center bg-white rounded">
      <b-form class="p-5 shadow-lg bg-white rounded" @submit="login">
        <h3 class="d-flex justify-content-center"> Log in </h3>
        <b-form-group id="input-group-1">
          <b-form-input
              id="input-1"
              v-model="form.username"
              type="text"
              required
              placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2">
          <b-form-input
              id="input-2"
              v-model="form.password"
              :type="type"
              required
              placeholder="Enter password"
          ></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-4">
          <label class="inline-flex items-center">
          <input class="mr-2 h-5 w-5" type="checkbox" @click="showPassword">{{
            messagePassword }}</label>
        </b-form-group>

        <b-button class="d-flex justify-content-center" type="submit" variant="primary">Log in</b-button>
      </b-form>

    </div>
</div>
</template>

<script>
export default {

  name: "LogIn",
  data() {
    return {
      type: 'password',
      messagePassword: 'Show Password',
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {

    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.messagePassword = 'Hide Password'
      } else {
        this.type = 'password'
        this.messagePassword = 'Show Password'
      }
    },
    login() {
      // this.$store.dispatch('currentUser/loginUser',this.user)
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}

.login{
  padding-top: 12vw;
}

</style>
