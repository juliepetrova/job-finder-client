<template>
  <div class="main">

    <div class="login mt-24 d-flex justify-content-center bg-white rounded">
      <div class="p-5 shadow-lg bg-white rounded">

        <form @submit="login">
          <h3 class="d-flex justify-content-center text-gray-700 text-3xl mt-3 mb-5"> Log in </h3>

          <div class="input-container">
            <input type="text" required  v-model="form.email" />
            <label>Enter your email</label>
          </div>
          <div class="input-container">
            <input  v-model="form.password"
                    :type="type" required/>
            <label>Enter your password</label>
          </div>

          <div class="mb-5">
            <label class="inline-flex items-center">
              <input class="mr-2 h-5 w-5" type="checkbox" @click="showPassword">{{
                messagePassword
              }}</label>
          </div>

          <b-button class="rounded-2xl bg-gradient-to-r from-indigo-700	to-purple-900 text-xl w-full" type="submit">Log in</b-button>
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
      form: {
        email: '',
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
.main {
  width: 100%;
  height: 100%;
}


.input-container{
  position:relative;
  margin-bottom:25px;
  width: 20vw;
}
.input-container label{
  position:absolute;
  top:0px;
  left:0px;
  font-size:16px;
  pointer-event:none;
  color: darkgray;
  transition: all 0.5s ease-in-out;
}
.input-container input{
  border:0;
  border-bottom:1px solid #555;
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  /*color:#fff;*/
}
.input-container input:focus{
  border:none;
  outline:none;
  border-bottom:1px solid #e74c3c;
}
.input-container input:focus ~ label,
.input-container input:valid ~ label{
  top:-12px;
  font-size:12px;

}


</style>
