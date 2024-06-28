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

export default axiosInstance;
