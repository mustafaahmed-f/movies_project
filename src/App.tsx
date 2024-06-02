import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
const Details = lazy(() => import("./Pages/Details"));
// import { loader as homeLoader } from "./Pages/Home";
import { loader as detailsLoader } from "./Pages/Details";
import MainLoader from "./UI/MainLoader";
import ErrorElement from "./UI/ErrorElement";
import PageNotFound from "./UI/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/details/:movieID",
        element: (
          <Suspense fallback={<MainLoader />}>
            <Details />
          </Suspense>
        ),
        loader: detailsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
