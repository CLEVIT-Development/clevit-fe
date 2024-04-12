import HomePage from "@/pages/HomePage.tsx";
import { RoutePaths } from "@/routing/routing.constants.ts";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Home} element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
