<template>
  <b-card class="col-md-7" header-tag="nav">
    <template v-slot:header>
      <b-nav card-header tabs>
        <b-nav-item class="color-secondary " >Skills</b-nav-item>
      </b-nav>
    </template>

    <div class="tab-content profile-tab">
      <div class="row">
        <div class="main-color pt-1 pl-3 pr-1 rounded-2xl">
          <label class="float-left pr-3">Atletic</label>
          <button class=" float-right rounded-full shadow-md flex justify-center items-center focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
              <path fill="none" stroke="#693cc9"  stroke-width="1" d="M41.999 20.002l-22 22m22 0L20 20"
                    stroke-linejoin="round" stroke-linecap="round"></path>
            </svg></button>
        </div>
      </div>

    </div>
  </b-card>
</template>

<script>
import api from "@/components/backend-api";

export default {
  name: 'skills',
  data () {
    return {
      skills: [],
      editing: false,
    }

  },
  methods: {
    save(skill) {
      this.editing = false
      this.skills.push(skill)
      api.saveSkill(skill)
     },
    // delete(id){
    //
    // }
  }
}
</script>

<style scoped>
.profile-tab label{
  font-weight: 600;
}
.info{
  font-weight: 600;
  color: #0062cc;
}
.main-color{
  background-color: #cccfed;
  color: #5b64c9;
}
</style>
