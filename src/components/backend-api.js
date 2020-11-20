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
    getUser(userId){
        return AXIOS.get('users/' + userId)
    },
    updateUser(personalInfo){
        return AXIOS.put('/users', personalInfo)
    },


    //Applications
    getApplications(userId){
        return AXIOS.get("/applications/applicant/" + userId)
    },
    getApplicationsByJobId(jobId){
        return AXIOS.get("/applications/job/" + jobId)
    },
    getUserIdByApplication(applicationId){
        return AXIOS.get("applications/user/" + applicationId)
    },
    deleteApplication(applicationId){
        return AXIOS.delete("/applications/" + applicationId)
    },
    setStatusApplication(applicationId, status){
        return AXIOS.put("applications/updateStatus/" + applicationId + "/" + status)
    },
    getPastJobs(userId){
        return AXIOS.get("users/" + userId + '/pastjobs')
    }



}
