import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TheGuestLayout from "./layouts/Guest.jsx";
import ThePercentageCalcPage from "./pages/ThePercentageCalcPage";
import TheFindTotalPage from "./pages/TheFindTotalPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TheGuestLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <ThePercentageCalcPage />,
          },
          {
            path: "/calcTotal",
            element: <TheFindTotalPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
