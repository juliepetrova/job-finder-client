<template>
  <b-modal  v-model="modalShow">
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
          id="input-group-1"
          label="Job title:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter job title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.description"
            required
            placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Date:" label-for="input-3">
        <b-form-input
            id="input-3"
            v-model="form.date"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Payment:" label-for="input-4">
        <b-form-input
            id="input-4"
            v-model="form.payment"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="City:" label-for="input-5">
        <b-form-input
            id="input-5"
            v-model="form.city"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Address:" label-for="input-6">
        <b-form-input
            id="input-6"
            v-model="form.address"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="color-primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </b-modal>
</template>

<script>
import api from "@/components/backend-api";

export default {
  props: ["modalShow"],
  data() {
    return {
      form: {
        status_id: 1,
        title: '',
        description: '',
        date: '',
        payment: 0,
        city: '',
        address: '',
        user: {
          id: 1
        }
      },
      show: true,
      post: []
    }
  },
  methods: {
    onSubmit() {
      let resp = JSON.stringify(this.form);
      api.saveJob(resp)
      .then(res => this.post = res.data)
      .catch(err => console.log(err));
      this.modalShow = false;
      this.$emit('closeModal', 'false')
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      this.form.date = ''
      this.form.payment = 0
      this.form.city = ""
      this.form.address = ""
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

  }
}
</script>

<style scoped>
.color-primary{
  background-color: #4c58cf;
}
</style>
