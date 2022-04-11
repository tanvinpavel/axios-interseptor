import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:9090',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});

export default axios.create({
    baseURL: 'http://localhost:9090'
});