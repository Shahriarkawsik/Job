import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
