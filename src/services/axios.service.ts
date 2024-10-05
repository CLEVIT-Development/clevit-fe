import axios from "axios";

import { getApiErroByMessage } from "@/app/api-error-codes";

import LocalStorageService from "./localstorage.service";

const createAxiosInstance = (withAuth = false) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  // Interceptor for handling errors
  instance.interceptors.response.use(
    (response) => response.data,

    async (error) => {
      let errorMessage: string = "An unknown error occurred";

      // Check if error response exists
      if (error.response && error.response.status === 404) {
        const { message } = error.response.data.status;

        errorMessage = getApiErroByMessage(message);

        return Promise.reject(errorMessage);
      }

      if (error.response && error.response.status === 401) {
        const { message } = error.response.data.status;

        if (withAuth) {
          const savedRefreshToken = LocalStorageService.getRefreshToken();

          const response = await instance.post("/auth/refresh-token", {
            refreshToken: savedRefreshToken,
          });

          const { accessToken } = response.data;

          LocalStorageService.setToken(accessToken);

          if (accessToken) {
            const originalRequest = error.config;

            return instance(originalRequest);
          } else {
            return Promise.reject("Refresh token fail");
          }
        } else {
          errorMessage = getApiErroByMessage(message);

          return Promise.reject(errorMessage);
        }
      }

      // Handle network errors or other Axios errors
      if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      }

      // Return a rejected promise with the error message
      return Promise.reject(errorMessage);
    }
  );

  if (withAuth) {
    instance.interceptors.request.use(
      async (config) => {
        const token = LocalStorageService.getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  return instance;
};

// Create Axios instances
const axiosInstance = createAxiosInstance();
const axiosInstanceAuth = createAxiosInstance(true);

export { axiosInstance, axiosInstanceAuth };
