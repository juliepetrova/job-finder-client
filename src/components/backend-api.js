import axios from 'axios'

const AXIOS = axios.create({
    baseURL: `http://localhost:8080/`,
    timeout: 1000
});


export default {
    getJob(jobId){
        return AXIOS.get('/jobs/' + jobId);
    },
    getJobPosts() {
        return AXIOS.get('/jobs');
    },
    getEmployeePosts(userId) {
        return AXIOS.get('users/' + userId + '/jobs')
    }

    // getUser(userId) {
    //     return AXIOS.get(`/user/` + userId);
    // },
    // createUser(firstName, lastName) {
    //     return AXIOS.post(`/user/` + firstName + '/' + lastName);
    // },
    // getSecured(user, password) {
    //     return AXIOS.get(`/secured/`,{
    //         auth: {
    //             username: user,
    //             password: password
    //         }});
    // }
}
