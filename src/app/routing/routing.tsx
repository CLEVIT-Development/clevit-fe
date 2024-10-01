import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { routerElements } from "@/app/routing/routing.constants.ts";
import ScrollToTop from "@/common/templates/ScrollToTop.tsx";
import NotFoundPage from "@/pages/not-found/NotFoundPage.tsx";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerElements.map(({ Element, path, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              {isPrivate ? (
                <PrivateRoute>
                  <Element />
                </PrivateRoute>
              ) : (
                <Element />
              )}
              <ScrollToTop />
            </>
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
