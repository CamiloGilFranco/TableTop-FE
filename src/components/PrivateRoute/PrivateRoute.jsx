import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useJwt } from "react-jwt";
import Cookies from "universal-cookie";

const PrivateRoute = ({ children, role }) => {
  const cookies = new Cookies();
  const { isExpired } = useJwt(cookies.get("token"));
  const user = useSelector((state) => state.userReducer.user);

  return !isExpired && user.user_role === role ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};

export default PrivateRoute;