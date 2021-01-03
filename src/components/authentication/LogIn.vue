<template>
  <div class="main background min-h-screen">

    <div class="login mt-24 d-flex justify-content-center">
      <div class="p-5 shadow-lg bg-white rounded">

        <form @submit.prevent="login">
          <h3 class="d-flex justify-content-center text-gray-700 text-3xl mt-3 mb-5"> Log in </h3>
          <div v-if="authError!=''" class="flex items-center bg-red-300 text-white text-sm font-bold px-4 py-3 mb-4"
               role="alert">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                  d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
            </svg>
            <p>{{ authError }}</p>
          </div>
          <div class="input-container">
            <input type="text" required v-model="username"/>
            <label>Enter your username</label>
          </div>
          <div class="input-container">
            <input v-model="password"
                   :type="type" required/>
            <label>Enter your password</label>
          </div>

          <div class="mb-5">
            <label class="inline-flex items-center">
              <input class="mr-2 h-5 w-5" type="checkbox" @click="showPassword">{{
                messagePassword
              }}</label>
          </div>

          <b-button class="rounded-2xl bg-gradient-to-r from-indigo-700	to-purple-900 text-xl w-full" type="submit">Log
            in
          </b-button>
        </form>
      </div>

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
      username: '',
      password: '',
      authError: '',

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
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', {username, password})
          .then(() => {
            if (localStorage.getItem('role') === 'POSTER') {
              this.$router.push('/employer/myProfile')
            } else if (localStorage.getItem('role') === 'SEEKER') {
              this.$router.push('/jobSeeker/myProfile')
            } else if (localStorage.getItem('role') === 'ADMIN') {
              this.$router.push('/admin/dashboard')
            }
            console.log(localStorage.getItem('role'))
          })
          .catch(() => this.authError = "Invalid credentials!")
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
  margin-bottom: 25px;
  width: 20vw;
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
  /*color:#fff;*/
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
