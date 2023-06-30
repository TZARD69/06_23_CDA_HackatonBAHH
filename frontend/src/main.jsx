import { ThemeProvider } from "@mui/material";
import Summary from "@pages/Summary";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainTheme } from "./theme";
import Home from "./pages/Home";
import AddPhone from "./pages/AddPhone";
import DataBase from "./pages/DataBase";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // pour l'outlet (afficher les children ici) et navbar reste fixe
      {
        path: "/acceuil",
        element: <Home />,
      },
      {
        path: "/addphone",
        element: <AddPhone />,
      },
      {
        path: "/basededonne",
        element: <DataBase />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resumer",
        element: <Summary/>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
