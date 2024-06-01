import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
const Details = lazy(() => import("./Pages/Details"));
import { loader as appLayOutLoader } from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: appLayOutLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:movieID",
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
