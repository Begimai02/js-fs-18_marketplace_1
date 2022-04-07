import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

const RequireAuth = ({ children }) => {
  let { currentUser } = useAuth();

  if (!currentUser.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
