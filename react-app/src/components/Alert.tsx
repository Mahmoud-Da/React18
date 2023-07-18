import { ReactNode } from "react";

interface Props {
  // if we want to type Hello World inside the Alert tag like normal HTML element we use (children Props)
  //   children: string;
  // if we want to pass Element inside Alert element we use nodeReact Class
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
