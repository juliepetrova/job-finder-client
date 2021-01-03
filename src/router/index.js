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
import Dashboard from "@/components/admin/Dashboard";

Vue.use(VueRouter)


const routes = [
    { path: '/employer/myProfile', component:ProfilePageEmployer,
        meta: {
            requiresAuth: true
        }},
    { path: '/admin/dashboard', component:Dashboard,
        meta: {
            requiresAuth: true
        }},
    { path: '/posts', component: jobPosts},
    { path: '/posts/:city', component: jobPosts},
    { path: '/login', component: LogIn},
    { path: '/signup', component: Registration},
    { path: '/jobSeeker/myProfile', component: ProfilePageJobSeeker,
        meta: {
            requiresAuth: true
        }  },
    { path: '/', component: Home},
    { path: '/job/:job_id', component: Job},
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


