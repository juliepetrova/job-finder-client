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

    //Jobs
    getJob(jobId){
        return AXIOS.get('jobs/' + jobId);
    },
    getUserByJob(jobId){
        return AXIOS.get('jobs/' + jobId + '/user');
    },
    getJobPosts(params) {
        return AXIOS.get('jobs',{ params });
    },
    getEmployeePosts(userId) {
        return AXIOS.get('users/' + userId + '/jobs')
    },
    deleteJob(jobId){
        return AXIOS.delete('jobs/' + jobId)
    },
    saveJob(form){
        return AXIOS.post('jobs', form)
    },
    updateJob(form) {
        return AXIOS.put('jobs', form)
    },
    apply(form){
        return AXIOS.post('applications', form)
    },
    getPastJobs(userId){
        return AXIOS.get("users/" + userId + '/pastjobs')
    },
    updateStatusJob(jobId, statusId){
        return AXIOS.put("jobs/updateStatus/" + jobId + '/' + statusId)
    },
    getHomePageStatistics(){
        return AXIOS.get("jobs/statistics")
    },



    //Users
    getUser(userId){
        return AXIOS.get('users/' + userId)
    },
    updateUser(personalInfo){
        return AXIOS.put('users', personalInfo)
    },



    //Applications
    getApplications(userId){
        return AXIOS.get("applications/applicant/" + userId)
    },
    getApplicationsByJobId(jobId){
        return AXIOS.get("applications/job/" + jobId)
    },
    getUserIdByApplication(applicationId){
        return AXIOS.get("applications/user/" + applicationId)
    },
    deleteApplication(applicationId){
        return AXIOS.delete("applications/" + applicationId)
    },
    setStatusApplication(applicationId, status){
        return AXIOS.put("applications/updateStatus/" + applicationId + "/" + status)
    },
    getPastApplications(userId){
        return AXIOS.get("applications/pastApplications/" + userId)
    },
    updateStatusApplication(applicationId, statusId){
        return AXIOS.put("applications/updateStatus/" + applicationId + '/' + statusId)
    },
    getStatistics(userId) {
        return AXIOS.get("/applications/statistics/" + userId)
    },



//    Applicant
    getApplicant(id){
        return AXIOS.get("users/applicant/" + id)
    },
    updateApplicant(applicant){
        return AXIOS.put("users/applicant", applicant)
    },
    updateRating(applicantId, rating){
      return AXIOS.put("users/applicant/"+ applicantId + '/' + rating)
    },

    // Report

    reportJob(form){
        return AXIOS.post('reports', form)
    },
    getReports(){
        return AXIOS.get('reports')
    },



}
