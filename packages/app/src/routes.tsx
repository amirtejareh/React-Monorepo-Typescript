import { Navigate, RouteObject } from "@hafez/framework";
import React from "react";
import Layout from "./layout";
import DashboardPage from "./pages/DashboardPage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "/dashboard", element: <DashboardPage /> },
      {
        path: "/page1",
        element: <PageOne />,
      },
      { path: "/page2", element: <PageTwo /> },
      { path: "/page3", element: <PageThree /> },
    ],
  },
];
export default routes;
