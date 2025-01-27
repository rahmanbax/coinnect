import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import MarketsPage from "./pages/MarketsPage.jsx";
import SwapPage from "./pages/SwapPage.jsx";
import PortfolioTracker from "./pages/PortfolioTracker.jsx";
import ErrorPage from "./pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/markets",
    element: <MarketsPage />,
  },
  {
    path: "/swap",
    element: <SwapPage />,
  },
  {
    path: "/tracker",
    element: <PortfolioTracker />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
