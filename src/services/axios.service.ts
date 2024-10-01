import axios from "axios";

// Create Axios instance without authentication
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      const errorMessage = error.response.data.message || error.message;

      return Promise.reject(errorMessage);
    }

    return Promise.reject(error.response.data.message || error.message);
  }
);

// Create an authenticated Axios instance
const axiosInstanceAuth = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add a request interceptor to include the access token in the headers
axiosInstanceAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Assuming you have set the token here

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach token as Bearer token
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Reuse the error handling interceptor
axiosInstanceAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      const errorMessage = error.response.data.message || error.message;

      return Promise.reject(errorMessage);
    }

    return Promise.reject(error.response.data.message || error.message);
  }
);

export { axiosInstance, axiosInstanceAuth };
