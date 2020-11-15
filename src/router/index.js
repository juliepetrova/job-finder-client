import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import ProfilePageEmployer from "@/components/employer/ProfilePageEmployer";
import ProfilePageJobSeeker from "@/components/jobSeeker/ProfilePageJobSeeker";
import jobPosts from "@/components/jobPosts";
import LogIn from "@/components/authentication/LogIn";
import Registration from "@/components/authentication/Registration";
import Home from "@/components/Home";
import Job from "@/components/Job";
import ApplyForJob from "@/components/ApplyForJob";


Vue.use(VueRouter)


const routes = [
    { path: '/employer/myProfile', component:ProfilePageEmployer},
    { path: '/posts', component: jobPosts},
    { path: '/login', component: LogIn},
    { path: '/signup', component: Registration},
    { path: '/jobSeeker/myProfile', component: ProfilePageJobSeeker,    },
    { path: '/', component: Home},
    { path: '/job/:job_id', component: Job},
    { path: '/apply/:job_id', component: ApplyForJob,         meta: {
            requiresAuth: true
        }},

]

const router = new VueRouter({
    routes
})



router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router


