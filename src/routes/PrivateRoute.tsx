import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import ChildrenProps from "../interface/ChildrenProps";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();
  console.log("PrivateRoute", isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
