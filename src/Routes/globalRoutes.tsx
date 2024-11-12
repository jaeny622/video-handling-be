import { createBrowserRouter } from "react-router-dom";

import Trending from "../Pages/Trending";
import Join from "../Pages/Join";
import Login from "../Pages/Login";
import Search from "../Pages/Seach";

const globalRoutes = [
  { index: true, element: <Trending /> },
  { path: "/join", element: <Join /> },
  { path: "/login", element: <Login /> },
  { path: "/search", element: <Search /> },
];

export default createBrowserRouter(globalRoutes);
