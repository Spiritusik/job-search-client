import axios from "axios";

export const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
});