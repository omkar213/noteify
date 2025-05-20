import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Mynotes from "../pages/Mynotes";
import CreateNote from "../pages/CreateNote";
import PrivateRoute from "../components/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mynotes",
        element: (
          <PrivateRoute>
            <Mynotes />
          </PrivateRoute>
        ),
      },
      {
        path: "createnote",
        element: (
          <PrivateRoute>
            <CreateNote />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
