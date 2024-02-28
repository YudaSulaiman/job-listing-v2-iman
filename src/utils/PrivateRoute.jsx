import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAllowed, redirectTo = "/", children }) {
  console.log(isAllowed);
  if (!isAllowed) {
    console.log(isAllowed);
    return <Navigate to={redirectTo} />;
  }

  return <div>{children ? children : <Outlet />}</div>;
}

export default PrivateRoute;
