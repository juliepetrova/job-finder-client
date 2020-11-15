<template>
  <div class="main background min-h-screen">
    <div class="signup d-flex justify-content-center">
      <div class="p-5 shadow-lg bg-white rounded mt-5">
        <form @submit.prevent="register">
          <h3 class="d-flex justify-content-center text-gray-700 text-3xl mt-3 mb-5"> Sign up </h3>

          <div class="flex">
            <div class="input-container flex-initial mr-2">
              <input type="text" required v-model="form.firstname"/>
              <label>Enter your first name</label>
            </div>
            <div class="input-container flex-initial ml-2">
              <input type="text" required v-model="form.lastname"/>
              <label>Enter your last name</label>
            </div>
          </div>
                  <div class="input-container">
                    <input type="text" required  v-model="form.username" />
                    <label>Enter your username</label>
                  </div>
          <div class="input-container">
            <input type="text" required v-model="form.email"/>
            <label>Enter your email</label>
          </div>
          <div class="input-container">
            <input type="password" required v-model="form.password"/>
            <label>Enter your password</label>
          </div>
          <div class="input-container">
            <input type="password" required v-model="form.confirmPassword"/>
            <label>Confirm your password</label>
          </div>
          <div class="mb-5">
            <label class="inline-flex items-center">
              <input class="mr-2 h-5 w-5 " type="checkbox"> <span class="text-sm"><i> I consent to the general terms and conditions</i></span></label>
          </div>
          <b-button class="rounded-2xl bg-gradient-to-r from-indigo-700	to-purple-900 text-xl w-full mt-2"
                    type="submit">Sign up
          </b-button>
        </form>
      </div>
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
        email: '',
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: '',
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
      let data = {
        first_name: this.form.firstname,
        last_name: this.form.lastname,
        email: this.form.email,
        username: this.form.username,
        password: this.form.password,
        role: 'SEEKER'
      }
      this.$store.dispatch('register', data)
          .then(() => this.$router.push('/login'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.input-container {
  position: relative;
  margin-bottom: 30px;
  /*width: 20vw;*/
}

.input-container label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  pointer-event: none;
  color: darkgray;
  transition: all 0.5s ease-in-out;
}

.input-container input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;

}

.input-container input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #e74c3c;
}

.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -12px;
  font-size: 12px;
}

.background {
  background-image: url("../../assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
