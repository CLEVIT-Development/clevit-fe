import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RoutePaths, routerElements } from "@/routing/routing.constants.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerElements.map(({ Element, path }) => (
        <Route path={path} element={<Element />} />
      ))}
      <Route path={RoutePaths.All} element={<Navigate to="/" />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
