<template>

  <div>
    <SideMenu></SideMenu>
    <b-card-group>
      <JobCard> </JobCard>
      <JobCard> </JobCard>
      <JobCard> </JobCard>
      <JobCard> </JobCard>
      <JobCard> </JobCard>
      <JobCard> </JobCard>
    </b-card-group>
  </div>
</template>

<script>
import JobCard from './jobCard.vue'
import SideMenu from './layout/SideMenu'


export default {
  name: 'JobPosts',
  components: {
    JobCard,
    SideMenu
  }
}

</script>

<style scoped>

</style>
