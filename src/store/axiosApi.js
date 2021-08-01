import axios from "axios";

const baseURL = "http://api.holidaytrekkers.com";

const _axios = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "*/*",
  },
});

export default _axios;
