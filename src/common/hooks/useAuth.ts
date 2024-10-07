import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");

      setIsAuthenticated(!!token);
    };

    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return { isAuthenticated };
};
