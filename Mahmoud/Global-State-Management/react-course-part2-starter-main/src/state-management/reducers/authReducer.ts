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

export default authReducer;
