import axios from 'axios'

const AXIOS = axios.create({
    baseURL: `http://localhost:8080/`,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export default {
    getJob(jobId){
        return AXIOS.get('/jobs/' + jobId);
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
