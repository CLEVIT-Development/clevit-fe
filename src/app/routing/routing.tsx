import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { routerElements } from "@/app/routing/routing.constants.ts";
import ScrollToTop from "@/common/templates/SrollToTop";
import NotFoundPage from "@/pages/not-found/NotFoundPage.tsx";

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
      <Route path={"*"} element={<NotFoundPage />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
