import axios, { AxiosError } from "axios";


export const instanceAxios=axios.create({
    baseURL:"/api/"
})



instanceAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    (err: AxiosError) => {
      return Promise.reject(err);
    }
  );