import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "pages";
import MainLayout from "@/layout/MainLayout.tsx";
import { RoutePaths } from "@/routing/routing.constants.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Home} element={
        <MainLayout>
          <HomePage />
        </MainLayout>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </>,
  ),
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
