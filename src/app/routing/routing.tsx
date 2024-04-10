import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RoutePaths from "./routing.constants.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Home} element={<>Home</>} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
