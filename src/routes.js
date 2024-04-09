import { useRoutes } from "react-router-dom";

import LandingPage from "@pages/landing-page/LandingPage";
import RootPage from "@pages/root/RootPage";
import HomePage from "@pages/home-page/HomePage";
import BlogPostDetails from "@pages/blog-post-details/BlogPostDetails";
import Bookmarks from "@pages/bookmarks/Bookmarks";

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
        {
          path: "/blog-post/:_id",
          element: <BlogPostDetails />,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ]);

  return elements;
};
