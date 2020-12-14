<template>
  <div class="jobs">
    <div class="curved bg-indigo-700">
      <h1 class="p-6 pt-32">Boulot</h1>
      <p class="pb-16 pt-4 text-xl"> We'll help you find the ideal next small job</p>
      <svg class="nectar-shape-divider" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
           preserveAspectRatio="none">
        <path d="M 0 45.86 h 458 c 29 0 42 19.27 42 19.27 s 13 -19.27 42.74 -19.27 h 457.26 v 54.14 h -1000 z"></path>
      </svg>
    </div>
    <h3 class="text-center text-4xl pb-4"> Available jobs</h3>
    <!--    Sort and Filter -->
    <div class="flex justify-between">
      <div class="ml-40 w-1/3">
      </div>
      <div class="flex flex-wrap justify-end">
        <div>
          <fieldset class="border-b border-black p-0 mr-5">
            <input v-model="searchCity" class="bg-transparent p-3 m-0 w-64 active:border-0 focus:outline-none"
                   placeholder="Search by city" @input="page = 1; retrieveJobs();" >
            <button  @click="page = 1; retrieveJobs();" class="float-right mr-2 pt-3"><i class="fas fa-search"></i></button>
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

      <div v-bind:key="jobPost.id" v-for="jobPost in jobPosts">
        <JobCard v-bind:jobPost="jobPost"></JobCard>
      </div>

    </b-card-group>

    <b-pagination class="m-5 text-center d-flex justify-content-center"
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
    ></b-pagination>

  </div>

</template>

<script>
import JobCard from './jobCard.vue'
import api from "@/components/backend-api";

export default {
  name: 'JobPosts',
  components: {
    JobCard,
  },

  data() {
    return {
      jobPosts: [],
      sort: '',
      search: '',
      searchCity: '',

      page: 1,
      count: 0,
      pageSize: 12,


    }
  },

  methods: {
    getRequestParams(searchCity, page, pageSize) {
      let params = {};

      if (searchCity) {
        params["city"] = searchCity;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    sortTable(key, direction) {
      this.sort = `${key} > ${direction}`
      if (direction === 'asc') {
        this.jobPosts.sort((a, b) => a[key] > b[key] ? 1 : -1)
      } else {
        this.jobPosts.sort((a, b) => a[key] < b[key] ? 1 : -1)
      }
    },

  handlePageChange(value) {
    this.page = value;
    this.retrieveJobs();
  },
  retrieveJobs(){
    const params = this.getRequestParams(
        this.searchCity,
        this.page,
        this.pageSize
    );
    api.getJobPosts(params)
        .then(res => {
          const { jobs, totalItems } = res.data;
          this.jobPosts = jobs
          this.count = totalItems
    })
        .catch(err => console.log(err));
  }
  },

  created() {
    if(this.$route.params.city){
      this.searchCity = this.$route.params.city
    }
    const params = this.getRequestParams(
        this.searchCity,
        this.page,
        this.pageSize
    );
    api.getJobPosts(params)
        .then(res => {
          const { jobs, totalItems } = res.data;
          this.jobPosts = jobs
          this.count = totalItems
        })

        .catch(err => console.log(err));
  },
  computed: {
    filteredList() {
      return this.jobPosts.filter(jobPost => {
        return jobPost.city.toLowerCase().includes(this.search.toLowerCase())
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
