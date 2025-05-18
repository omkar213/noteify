import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import router from "../routes/route";

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
