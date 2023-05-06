import { Navigate } from "react-router";
import { useJwt } from "react-jwt";
import Cookies from "universal-cookie";
import { getUserDataFromCookies } from "../../utils/auth";
import routePaths from "../../constants/routePaths";

const PrivateRoute = ({ children, role }) => {
  const cookies = new Cookies();
  const { isExpired } = useJwt(cookies.get("token"));
  const userData = getUserDataFromCookies(cookies);
  const userRole = userData ? userData.user_role : null;

  return userRole === role ? children : <Navigate to={routePaths.home} />;
};

export default PrivateRoute;
