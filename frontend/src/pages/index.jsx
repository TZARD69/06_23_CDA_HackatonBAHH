import React from "react";
import Root from "./root";
import Home from "./home";
import ErrorPage from "./error-page";

const Routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
];
export default Routes;
