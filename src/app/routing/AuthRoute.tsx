import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/common/context/AuthContext";

import { RoutePaths } from "./routing.constants";

interface AuthRouteProps {
  children: React.ReactNode;
  isPrivate?: boolean;
  isAuthPath: boolean;
}

const AuthRoute = ({ children, isPrivate, isAuthPath }: AuthRouteProps) => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isPrivate && !isAuthenticated) {
      return navigate(RoutePaths.AdminSignIn);
    }

    if (isAuthenticated && isAuthPath) {
      return navigate(RoutePaths.Home);
    }
  }, [isAuthenticated, isPrivate]);

  return <>{children}</>;
};

export default AuthRoute;
