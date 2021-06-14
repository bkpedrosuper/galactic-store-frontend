import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
                ? "http://localhost:3300"
                : "https://galactic-store.herokuapp.com"

const api = axios.create({
    baseURL: process.env.NODE_ENV,
});

export default api; 