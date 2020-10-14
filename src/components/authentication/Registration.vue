<template>
  <div class="main">
    <div class="signup d-flex justify-content-center">
      <b-form class="p-5 shadow-lg bg-white rounded" @submit="register">
        <h3 class="d-flex justify-content-center"> Sign up </h3>

        <b-form-group id="input-group-0">
          <b-form-input
              id="input-0"
              v-model="form.email"
              type="text"
              required
              placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3">
          <b-form-input
              id="input-3"
              v-model="form.firstname"
              type="text"
              required
              placeholder="Enter your first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-input
              id="input-4"
              v-model="form.lastname"
              type="text"
              required
              placeholder="Enter your last name"
          ></b-form-input>
        </b-form-group>

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
              type="password"
              required
              placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5">
          <b-form-input
              id="input-5"
              v-model="form.confirmPassword"
              type="password"
              required
              placeholder="Confirm password"
          ></b-form-input>
        </b-form-group>

        <b-button class="d-flex justify-content-center" type="submit" variant="primary">Log in</b-button>
      </b-form>

    </div>
  </div>
</template>

<script>
export default {

  name: "Register",
  data() {
    return {
      type: 'password',
      messagePassword: 'Show Password',
      form: {
        email:'',
        firstname:'',
        lastname:'',
        username: '',
        password: '',
        confirmPassword:'',
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
    register() {
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

.signup{
  padding-top: 2vw;
}

</style>
