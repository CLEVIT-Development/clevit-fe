import { createContext, useContext } from "react";

import { useAuth } from "../hooks/useAuth";

interface IAuthContext extends ReturnType<typeof useAuth> {}

const AuthContext = createContext<IAuthContext>({
  handleLogout: () => {},
  handleIsAuthenticated: () => {},
  isAuthenticated: false,
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
