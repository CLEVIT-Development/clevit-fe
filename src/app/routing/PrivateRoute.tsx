import { Navigate } from "react-router-dom";

import { useAuth } from "@/common/hooks/useAuth";

import { RoutePaths } from "./routing.constants";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={RoutePaths.AdminSignIn} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
