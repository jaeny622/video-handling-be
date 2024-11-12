import { RouterProvider } from "react-router";

import globalRoutes from "./globalRoutes";

export default function Routes() {
  return (
    <RouterProvider
      router={globalRoutes}
      future={{ v7_startTransition: true }}
    />
  );
}
