import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import LatestJobCardDetails from "../Pages/LatestJobCardDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <LatestJobCardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/jobs/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
