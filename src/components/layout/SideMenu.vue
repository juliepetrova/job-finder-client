<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Filter</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <h3>Select filters</h3>
          <b-btn>Location</b-btn><br>
          <b-btn>Payment</b-btn><br>
          <b-btn>Date</b-btn><br>
        <h3>Sort by:</h3>
        <b-btn-group>
          <b-btn>Location</b-btn>
          <b-btn>Payment</b-btn>
          <b-btn>Date</b-btn>
        </b-btn-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>

</script>

<style>

</style>
