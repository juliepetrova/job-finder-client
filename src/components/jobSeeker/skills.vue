<template>
  <b-card class="col-md-7" header-tag="nav">
    <template v-slot:header>
      <b-nav card-header tabs>
        <b-nav-item class="color-secondary ">Skills</b-nav-item>
      </b-nav>
    </template>

    <div class="tab-content profile-tab">
      <div class="row">
        <div class="main-color pt-1 pl-3 pr-1 rounded-2xl mr-2" v-bind:key="skill" v-for="(skill, index) in skills">
          <label class="float-left pr-3">{{ skill }}</label>
          <button @click="deleteSkill(index, skill)"
                  class=" float-right rounded-full shadow-md flex justify-center items-center focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
              <path fill="none" stroke="#693cc9" stroke-width="1" d="M41.999 20.002l-22 22m22 0L20 20"
                    stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </button>
        </div>
        <input v-if="skillsEditing"
               class="shadow appearance-none border rounded-full m-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-purple-100"
               v-model="newSkill">
        <button v-if="!skillsEditing" @click="skillsEditing = !skillsEditing"
                class="rounded-full h-8 w-8 shadow-md flex justify-center items-center hover:bg-purple-200 focus:outline-none font-light text-purple-500">
          <i class="fas fa-plus"></i>
        </button>
        <button v-if="skillsEditing" @click="saveSkill()"
                class="rounded-full h-8 w-8 shadow-md flex justify-center items-center hover:bg-purple-200 focus:outline-none font-light text-purple-500">
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  </b-card>
</template>

<script>
import api from "@/components/backend-api";

export default {
  name: 'skills',
  props: ["applicantId"],
  data() {
    return {
      applicant: [],
      skills: [],
      skillsEditing: false,
      editing: false,
      newSkill: ''
    }

  },
  methods: {

    saveSkill() {
      this.editing = false
      this.skills.push(this.newSkill)
      if(this.skills.length > 1) {
        let skillsString = this.skills.join(", ")
        this.applicant.skills = skillsString
      }else {
        console.log(this.applicant)
        this.applicant.skills = this.skills.toString()
      }
      api.updateApplicant(this.applicant)
          .then(() => {
            this.skillsEditing = false
            this.newSkill = ""
          })
          .catch(err => console.log(err))
    },
    divideSkills() {
      let allSkills = this.applicant.skills
      if(allSkills) {
        let res = allSkills.split(", ");
        res.forEach(skill => this.skills.push(skill))
      }
    },
    deleteSkill(index, skill) {
      console.log(skill)
      this.skills.splice(index, 1)
      let skillsString = this.skills.join(", ")
      this.applicant.skills = skillsString
      api.updateApplicant(this.applicant)
          .then()
          .catch(err => console.log(err));
    }
  },
  created() {
    api.getApplicant(this.applicantId)
        .then(res => {
          this.applicant = res.data
          this.divideSkills()
        })
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.profile-tab label {
  font-weight: 600;
}

.info {
  color: #5b64c9;
}

.main-color {
  background-color: #cccfed;
  color: #5b64c9;
}
</style>
