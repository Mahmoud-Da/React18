import { useContext } from "react";
import AuthContext from "./authContext";
import useAuthStore from "./store";

const useAuth = () => useContext(AuthContext);
const LoginStatus = () => {
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={logout} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("moody")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
