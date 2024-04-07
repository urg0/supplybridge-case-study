import { useRoutes } from "react-router-dom";

import LandingPage from "@pages/landing-page/LandingPage";
import RootPage from "@pages/root/RootPage";
import HomePage from "@pages/home-page/HomePage";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return elements;
};
