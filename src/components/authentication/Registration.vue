<template>
  <div class="main background min-h-screen">
    <div class="flex">
      <div class="w-1/3 ">
        <div class="float-right">
          <div class="mt-24 pt-5 flex justify-center align-items-center mb-5">
            <button @click="selectRole('POSTER')" :class="{active: activeBtn === 'POSTER' }"
                    class="poster rounded-full h-56 w-56 border-4 border-yellow-400 hover:border-indigo-600 focus:outline-none pt-40 font-bold">
              Post jobs
            </button>
          </div>
          <div class="flex justify-center align-items-center">
            <button @click="selectRole('SEEKER')" :class="{active: activeBtn === 'SEEKER' }"
                    class="seeker rounded-full h-56 w-56 border-4 border-yellow-400 hover:border-indigo-600 focus:outline-none pt-40 font-bold">
              Find jobs
            </button>
          </div>
        </div>
      </div>
      <div class="w-1/3 signup d-flex justify-content-center">
        <div class="p-5 shadow-lg bg-white rounded mt-5">
          <form @submit.prevent="register">
            <h3 class="d-flex justify-content-center text-gray-700 text-3xl mt-3 mb-5"> Sign up </h3>
            <div class="input-container">
              <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                Please choose a role.
              </b-alert>
            </div>
            <div v-if="authError!=''" class="flex items-center bg-red-300 text-white text-sm font-bold px-4 py-3 mb-4"
                 role="alert">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
              </svg>
              <p>{{ authError }}</p>
            </div>
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
              <input type="text" required v-model="form.username"/>
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

      <div class="w-1/3"></div>
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
      activeBtn: '',
      showDismissibleAlert: false,
      authError: '',
      form: {
        role: '',
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
      if (this.form.role) {
        let data = {
          first_name: this.form.firstname,
          last_name: this.form.lastname,
          email: this.form.email,
          username: this.form.username,
          password: this.form.password,
          role: this.form.role
        }
        this.$store.dispatch('register', data)
            .then(() => {
              console.log("registered!")
              this.$router.push('/login')
            })
            .catch(() => this.authError = "This username already exists")
      } else {
        this.showDismissibleAlert = true
      }

    },
    selectRole(role) {
      this.form.role = role;
      this.activeBtn = role;
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

.seeker {
  background-image: url("https://image.freepik.com/free-vector/job-hunt-concept-illustration_114360-436.jpg");
  background-size: contain;
}

.poster {
  background-image: url("https://image.freepik.com/free-vector/online-job-interview_23-2148644500.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.active {
  border-color: #3949ab;
}

</style>
