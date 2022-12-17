import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
      return;
    }
  });
  return (
    <>
      {!user ? (
        <Navigate to="/login" />
      ) : user && user?.data?.user?.userType === "dj" ? (
        <Navigate to="/" state={{ from: location }} replace></Navigate>
      ) : user && user?.data?.user?.userType === "user" ? (
        <Navigate
          to="/user-dashboard"
          state={{ from: location }}
          replace
        ></Navigate>
      ) : null}
    </>
  );
};

export default NotFound;
