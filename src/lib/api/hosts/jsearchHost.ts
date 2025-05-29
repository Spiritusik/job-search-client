import axios from "axios";

export const $jsearch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JSEARCH_API_URL,
  headers: {
    "x-rapidapi-host": process.env.NEXT_PUBLIC_JSEARCH_API_HOST,
    "x-rapidapi-key": process.env.NEXT_PUBLIC_JSEARCH_API_KEY,
  },
});