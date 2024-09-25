import axios from 'axios';

/// create an axios instance to avoid  repeatition
const apiClient = axios.create({
    baseURL:'http://localhost:3001/',
    headers:{
        'Content-Type' : 'application/json'
    }
})
export default apiClient;

  