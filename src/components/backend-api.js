import axios from 'axios'

const AXIOS = axios.create({
    baseURL: `http://localhost:8080/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
AXIOS.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }else {
        delete config.headers.Authorization;
    }
    return config;
});


export default {
    getJob(jobId){
        return AXIOS.get('/jobs/' + jobId);
    },
    getUserByJob(jobId){
        return AXIOS.get('/jobs/' + jobId + '/user');
    },
    getJobPosts() {
        return AXIOS.get('/jobs');
    },
    getEmployeePosts(userId) {
        return AXIOS.get('/users/' + userId + '/jobs')
    },
    deleteJob(jobId){
        return AXIOS.delete('/jobs/' + jobId)
    },
    saveJob(form){
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        return AXIOS.post('/jobs', form, config)
    },
    updateJob(form) {
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        return AXIOS.put('/jobs', form, config)
    },
    apply(form){
        return AXIOS.post('/applications', form)
    },
    getUser(user_id){
        return AXIOS.get('users/' + user_id)
    },
    updateUser(personalInfo){
        return AXIOS.put('/users', personalInfo)
    },

    getApplications(user_id){
        return AXIOS.get("/applications/applicant/" + user_id)
    }


}
