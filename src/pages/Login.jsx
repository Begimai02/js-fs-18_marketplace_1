import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../contexts/AuthContextProvider";
// import AuthForm from "../components/Auth/AuthForm";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        linkText={"Don't have an accoun? Register!"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
