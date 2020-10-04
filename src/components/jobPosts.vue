<template>
  <div>
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

export default {
  name: 'JobPosts',
  components: {
    JobCard
  }
}

</script>

<style scoped>

</style>
