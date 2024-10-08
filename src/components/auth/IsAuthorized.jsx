import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function IsAuthorized() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!user.authUser) {
    return <Navigate to="/signin" state={location} />;
  } else {
    return <Outlet />;
  }
}
