import axios from 'axios'

const baseURL = "http://localhost:3300";

console.log(process.env.NODE_ENV);

const api = axios.create({
    baseURL: baseURL,
});

export default api; 