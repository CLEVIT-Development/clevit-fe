import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RoutePaths, routerElements } from "@/app/routing/routing.constants.ts";
import { AuthProvider } from "@/common/context/AuthContext";
import { BlogProvider } from "@/common/context/BlogContext.tsx";
import ScrollToTop from "@/common/templates/ScrollToTop.tsx";
import NotFoundPage from "@/pages/not-found/NotFoundPage.tsx";

import AuthRoute from "./AuthRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerElements.map(({ Element, path, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            <AuthProvider>
              <AuthRoute isPrivate={isPrivate} isAuthPath={path === RoutePaths.AdminSignIn}>
                <Element />
              </AuthRoute>
              <ScrollToTop />
            </AuthProvider>
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const Routing = () => {
  return <BlogProvider children={<RouterProvider router={router} />} />;
};

export default Routing;
