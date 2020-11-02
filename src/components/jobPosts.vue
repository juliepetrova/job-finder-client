<template>
  <div class="jobs">
    <div class="curved bg-indigo-700">
      <h1 class="p-6 pt-32">Boulot</h1>
      <p class="pb-16 pt-4 text-xl"> We'll help you find the ideal next small job</p>
      <!--      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">-->
      <!--        <path fill="#fff" fill-opacity="1"-->
      <!--              d="M0,64L80,90.7C160,117,320,171,480,202.7C640,235,800,245,960,224C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>-->
      <svg class="nectar-shape-divider" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
           preserveAspectRatio="none">
        <path d="M 0 45.86 h 458 c 29 0 42 19.27 42 19.27 s 13 -19.27 42.74 -19.27 h 457.26 v 54.14 h -1000 z"></path>
      </svg>
    </div>
    <!--    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
    <!--         preserveAspectRatio="xMidYMid meet" viewBox="-1 287.1475180685442 644 156.52511836784203"-->
    <!--         width="100%" ><defs>-->
    <!--      <path d="M640 288.15C637.24 301.79 629.51 314.82 616.8 327.25C598.5 345.14 574.37 364.02 515.56 369.45C489.02 371.91 399.49 365.67 357.52 385.28C335.41 395.61 320.77 414.07 313.61 440.67C307.5 413.24 293.75 394.77 272.33 385.28C223.54 363.65 119.39 372.8 99.27 369.45C62.59 363.36 52.54 354.51 35.47 342.93C14.6 328.77 2.78 310.51 0 288.15L0 288.15" id="adEr2pboB"></path>-->
    <!--    </defs><g><g><g><use xlink:href="#adEr2pboB" opacity="1" fill-opacity="" stroke="#ff3c00" fill="ff3c00"-->
    <!--                         stroke-width="1" stroke-opacity="1"></use></g></g></g></svg>-->

    <h3 class="text-center text-4xl pb-4"> Available jobs</h3>
    <!--    Sort and Filter -->
    <div class="flex justify-between">
      <div class="ml-40 w-1/3">
        <SideMenu></SideMenu>
      </div>
      <div class="flex flex-wrap justify-end">
        <div>
          <fieldset class="border-b border-black p-0 mr-5">
            <input v-model="search" class="bg-transparent p-3 m-0 w-64 active:border-0 focus:outline-none"
                   placeholder="Search by job title">
            <button class="float-right mr-2 pt-3"><i class="fas fa-search"></i></button>
          </fieldset>
        </div>
        <div class="sort mr-40">

          <div class="dropdown inline-block relative">
            <button
                class="bg-transparent text-indigo-700 hover:bg-indigo-500 font-semibold hover:text-white py-2 px-4 rounded inline-flex items-center border border-indigo-500">
              <span class="mr-1">Sort by</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-indigo-700 pt-1">
              <li class=""><a class="hover:bg-indigo-300 py-2 px-4 block whitespace-no-wrap" href="#"
                              @click="sortTable('payment', 'asc')">Payment low to high</a></li>
              <li class=""><a class="rounded-t hover:bg-indigo-300 py-2 px-4 block whitespace-no-wrap "
                              href="#" @click="sortTable('payment', 'desc')">Payment high to low</a></li>
              <li class=""><a class="hover:bg-indigo-300 py-2 px-4 block whitespace-no-wrap"
                              href="#" @click="sortTable('date', 'asc')">Date published</a></li>
              <li class=""><a class="rounded-b hover:bg-indigo-300 py-2 px-4 block whitespace-no-wrap"
                              href="#" @click="sortTable('date', 'desc')">Date of job</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <b-card-group class="m-5 text-center d-flex justify-content-center">

      <div v-bind:key="jobPost.id" v-for="jobPost in filteredList">
        <JobCard v-bind:jobPost="jobPost"></JobCard>
      </div>

    </b-card-group>
  </div>

</template>

<script>
import JobCard from './jobCard.vue'
import SideMenu from './layout/SideMenu'
import api from "@/components/backend-api";

export default {
  name: 'JobPosts',
  components: {
    JobCard,
    SideMenu,
  },

  data() {
    return {
      jobPosts: [],
      sort: '',
      search: '',


    }
  },

  methods: {
    sortTable(key, direction) {
      this.sort = `${key} > ${direction}`
      if (direction === 'asc') {
        this.jobPosts.sort((a, b) => a[key] > b[key] ? 1 : -1)
      } else {
        this.jobPosts.sort((a, b) => a[key] < b[key] ? 1 : -1)
      }
    },
  },

  created() {
    api.getJobPosts()
        .then(res => this.jobPosts = res.data)
        .catch(err => console.log(err));
  },
  computed: {
    filteredList() {
      return this.jobPosts.filter(jobPost => {
        return jobPost.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

</script>

<style scoped>

.curved {
  /*background-color: #1F3095;*/
  color: white;
  text-align: center;
  background-image: url("../assets/officeCrop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.curved h1 {
  font-size: 6rem;
}

.curved svg {
  display: block;
}

.links {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.below-title {
  border-top: dotted 1px #999;
  border-bottom: dotted 1px #999;
  padding-top: 10px;
  padding-bottom: 10px;
  color: darkgray;
  font-size: smaller;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

</style>
