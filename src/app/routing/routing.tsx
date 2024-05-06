import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { routerElements } from "@/app/routing/routing.constants.ts";
import ScrollToTop from "@/common/templates/SrollToTop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerElements.map(({ Element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Element />
              <ScrollToTop />
            </>
          }
        />
      ))}
      <Route path={"*"} element={<Navigate to="/" />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
