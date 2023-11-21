import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "./globalContext";

const PrivateRoute = ({ path, element }) => {
  const { getToken } = useGlobalContext();
  const isAuthenticated = !!getToken();

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet path={path} element={element} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
