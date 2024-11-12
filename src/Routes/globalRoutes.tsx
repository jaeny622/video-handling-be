import { createBrowserRouter, RouteObject } from "react-router-dom";

import Trending from "../Pages/Trending";
import Join from "../Pages/Join";
import Login from "../Pages/Login";
import Search from "../Pages/Seach";
import Detail from "../Pages/Detail";
import Edit from "../Pages/Edit";
import NotFound from "../Pages/NotFound";

const globalRoutes = [
  { index: true, element: <Trending /> },
  { path: "/join", element: <Join /> },
  { path: "/login", element: <Login /> },
  { path: "/search", element: <Search /> },
  {
    path: "/video",
    children: [
      {
        path: ":id",
        element: <Detail />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
] as RouteObject[];

export default createBrowserRouter(globalRoutes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});
