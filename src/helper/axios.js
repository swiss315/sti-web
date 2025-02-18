import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import store from "../service/Constant/store.ts";
import {API, baseURL} from "./action.js";
// import {handleLogout} from "../service/Constant/action";

interface ErrorResponse {
  response: {
    status: number;
  };
}

export const unauthorized = axios.create({
  baseURL: baseURL,
});

export const unauthorizedGateRequest = axios.create({
    baseURL: API, // Change `API` to `baseURL`
});

export const authorized = axios.create({
  baseURL: baseURL,
});

unauthorizedGateRequest.interceptors.request.use(
    (config) => {
        console.log('Request URL:', config.baseURL + config.url);
        console.log('Request Headers:', config.headers);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


unauthorized.interceptors.request.use(
    (config) => {
        console.log('Request URL:', config.baseURL + config.url);
        console.log('Request Headers:', config.headers);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authorized.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const state = store.getState();
    // const { token } = state.auth;
    const token = 'kkkk'

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: ErrorResponse) => {
    return Promise.reject(error);
  },
);

authorized.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: ErrorResponse) => {
    if (error.response && error.response.status === 401) {
      // store.dispatch(handleLogout());
    }
    return Promise.reject(error);
  },
);
