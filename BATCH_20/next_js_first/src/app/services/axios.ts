import axios from "axios";

const ACCESS_TOKEN = process.env.NEXT_APP_ACCESS_TOKEN;

export const Axios = axios.create({
  baseURL: "https://api.asaanhaicoding.in",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
