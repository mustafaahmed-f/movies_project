import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
const Details = lazy(() => import("./Pages/Details"));
import { loader as homeLoader } from "./Pages/Home";
import { loader as detailsLoader } from "./Pages/Details";
import MainLoader from "./UI/MainLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/details/:movieID",
        element: (
          <Suspense fallback={<MainLoader />}>
            <Details />
          </Suspense>
        ),
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
