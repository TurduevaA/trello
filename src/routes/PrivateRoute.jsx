import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, fallBackPath, isAllowed }) => {
  // console.log(Component);
  if (!!isAllowed) {
    return <Navigate to={fallBackPath} replace />;
  }
  return Component;
};
