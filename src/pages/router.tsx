import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./error";
import { HomePage } from "./home";

import { AppLayout } from "@/layouts";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement:
        process.env.NODE_ENV === "development" ? undefined : <ErrorPage />,
      path: "/",
      children: [
        {
          element: <HomePage />,
          index: true,
          id: "root",
          path: "/:mvno",
          loader: async ({ params }) => {
            const { ThemeLoader } = await import("@/lib/utils");
            const theme = await ThemeLoader(params.mvno || "theme1");

            return theme;
          },
        },
      ],
    },
    {
      element: <ErrorPage />,
      path: "*",
    },
  ],
  {
    basename: process.env.NODE_ENV === "development" ? undefined : "/",
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
