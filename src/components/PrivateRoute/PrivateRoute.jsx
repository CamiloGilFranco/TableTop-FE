import { Navigate } from "react-router";
import { useJwt } from "react-jwt";
import Cookies from "universal-cookie";
import { getUserDataFromCookies } from "../../utils/auth";

const PrivateRoute = ({ children, role }) => {
  const cookies = new Cookies();
  const { isExpired } = useJwt(cookies.get("token"));
  const userData = getUserDataFromCookies(cookies);
  const userRole = userData ? userData.user_role : null;

  return !isExpired && userRole === role ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};

export default PrivateRoute;