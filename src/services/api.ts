import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
                ? "https://galactic-store.herokuapp.com"
                : "https://galactic-store.herokuapp.com"

const api = axios.create({
    baseURL: baseURL,
});

export default api; 