import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log("Private", location);
  const { isAuth } = useSelector((store) => store.AuthReducer);
  return isAuth ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
