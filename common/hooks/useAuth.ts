import { useEffect, useState } from "react";

import { useAuthToken } from "./useAuthToken";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { revokeToken, revokeRefreshToken } = useAuthToken();

  const handleLogout = () => {
    revokeToken();
    revokeRefreshToken();
    setIsAuthenticated(false);
  };

  const handleIsAuthenticated = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");

      setIsAuthenticated(!!token);
    };

    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return { isAuthenticated, handleLogout, handleIsAuthenticated };
};
