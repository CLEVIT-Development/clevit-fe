// src/hooks/useAuthToken.ts

export const useAuthToken = () => {
  return {
    // Set access token in localStorage
    setToken: (token: string) => {
      localStorage.setItem("accessToken", token);
    },

    // Set refresh token in localStorage
    setRefreshToken: (token: string) => {
      localStorage.setItem("refreshToken", token);
    },

    // Get access token from localStorage
    getToken: () => {
      return localStorage.getItem("accessToken");
    },

    // Get refresh token from localStorage
    getRefreshToken: () => {
      return localStorage.getItem("refreshToken");
    },

    // Remove access token from localStorage
    revokeToken: () => {
      localStorage.removeItem("accessToken");
    },

    // Remove refresh token from localStorage
    revokeRefreshToken: () => {
      localStorage.removeItem("refreshToken");
    },
  };
};
