import axios from "axios";

export const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL
});