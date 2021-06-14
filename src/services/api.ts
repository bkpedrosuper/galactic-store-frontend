import axios from 'axios'

const baseURL = "http://localhost:3300";

const api = axios.create({
    baseURL: baseURL,
});

export default api; 