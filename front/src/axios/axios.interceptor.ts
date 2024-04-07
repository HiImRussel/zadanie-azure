/** Axios */
import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        config.baseURL = import.meta.env.VITE_API_BASE_URL as string;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
