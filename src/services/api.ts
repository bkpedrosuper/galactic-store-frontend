import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
                ? "http://localhost:3300"
                : "https://galactic-store.herokuapp.com"

console.log({baseURL, env: process.env.NODE_ENV});

const api = axios.create({
    baseURL: baseURL,
});

export default api; 