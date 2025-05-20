import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const user = useAuthStore((state) => state.user);
  const token = localStorage.getItem("token");

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
