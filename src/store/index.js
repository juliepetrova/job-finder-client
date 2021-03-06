import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {}
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },

    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:8080/users/authenticate', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.jwt
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        localStorage.setItem('user_id', resp.data.user.id)
                        localStorage.setItem('role', resp.data.user.role)
                        axios.defaults.headers.common['Authorization'] = "Bearer " + token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:8080/users/register', data: user, method: 'POST' })
                    .then(resp => {
                        if(resp.data.role === "SEEKER"){
                            console.log("seeker")
                            let form = {
                                id: resp.data.id,
                            }
                            axios({url: 'http://localhost:8080/users/applicant', data: form, method: 'POST' })
                                .then(() => console.log("success"))
                        }
                        // axios.defaults.headers.common['Authorization'] = "Bearer " +token
                        // commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('user_id')
                localStorage.removeItem('role')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }

    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})
