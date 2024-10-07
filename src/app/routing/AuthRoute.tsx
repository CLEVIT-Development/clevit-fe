import { Navigate } from "react-router-dom";

import { useAuth } from "@/common/hooks/useAuth";

import { RoutePaths } from "./routing.constants";

interface AuthRouteProps {
  children: React.ReactNode;
  isPrivate: boolean;
  isAuthPath: boolean;
}

const AuthRoute = ({ children, isPrivate, isAuthPath }: AuthRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isPrivate && !isAuthenticated) {
    return <Navigate to={RoutePaths.AdminSignIn} replace />;
  }

  if (isAuthenticated && isAuthPath) {
    return <Navigate to={RoutePaths.Home} replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;
