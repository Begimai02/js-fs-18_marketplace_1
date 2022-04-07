import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../contexts/AuthContextProvider";

const Register = () => {
  const { registerUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Register"}
        btnText={"Register"}
        link={"/login"}
        linkText={"Already have an account? Login!"}
        handleSave={registerUser}
      />
    </div>
  );
};

export default Register;
