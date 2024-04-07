import { useRoutes } from "react-router-dom";

import LandingPage from "@pages/landing-page/LandingPage";
import HomePage from "@pages/home-page/HomePage";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home-page",
      element: <HomePage />,
    },
  ]);

  return elements;
};
