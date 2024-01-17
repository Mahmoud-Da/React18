import React, { useState } from "react";
import { IoLogoApple } from "react-icons/io5";
import "./Login.css";

interface LoginProps {
  header: string;
  email: string;
  password: string;
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ header, email, password, onSubmit }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputEmail, inputPassword);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <IoLogoApple className="logo" />
        <h1 className="header">{header}</h1>
        <label>
          {email}
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </label>
        <label>
          {password}
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </label>
        <button type="submit">{header}</button>
      </form>
    </>
  );
};

export default Login;
