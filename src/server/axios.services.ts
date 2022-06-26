import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

axiosApi.interceptors.request.use(async (config) => {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
