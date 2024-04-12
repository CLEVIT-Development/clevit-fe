import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "pages";
import { RoutePaths } from "@/routing/routing.constants.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Home} element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>,
  ),
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
