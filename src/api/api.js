import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:10000',
    timeout: 1000,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
})

const sendAPI = {
    getPhone() {
        return instance.post('/', {
            "method": "phones"
        })
    },
    getCases() {
        return instance.post('/', {
            "method": "cases"
        })
    },
    getHeadphones() {
        return instance.post('/', {
            "method": "headphones"
        })
    }
}

export default sendAPI;