import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode;
}

type LoginAction = {
  type: "LOGIN";
  userName: string;
};

type LogoutAction = {
  type: "LOGOUT";
};

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;

    case "LOGOUT":
      return "";

    default:
      return state;
  }
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
