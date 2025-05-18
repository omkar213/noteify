import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Mynotes from "../pages/Mynotes";
import CreateNote from "../pages/CreateNote";

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
        element: <Mynotes />,
      },
      {
        path: "createnote",
        element: <CreateNote />,
      },
    ],
  },
]);

export default router;
