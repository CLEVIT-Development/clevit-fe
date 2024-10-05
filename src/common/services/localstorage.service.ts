const LocalStorageService = {
  getRefreshToken: () => localStorage.getItem("refreshToken"),

  getToken: () => localStorage.getItem("accessToken"),

  setToken: (token: string) => localStorage.setItem("accessToken", token),

  setRefreshToken: (token: string) => localStorage.setItem("refreshToken", token),

  revokeToken: () => localStorage.removeItem("accessToken"),

  revokeRefreshToken: () => localStorage.removeItem("refreshToken"),
};

export default LocalStorageService;
