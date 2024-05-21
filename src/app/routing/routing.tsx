import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { routerElements } from "@/app/routing/routing.constants.ts";
import NotFoundPage from "@/pages/not-found/NotFoundPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerElements.map(({ Element, path }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route path={"*"} element={<NotFoundPage />} />
    </>
  )
);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
