import React from "react";
import { Route, Redirect } from "react-router-dom";

import { storage } from "utils/storage";
import { AUTH_STORAGE_KEY } from "utils/constants";
import { useAuth } from "providers/Auth";

const ProtectedRoute = (props: any) => {
  const isLoggedIn =
    useAuth().isLoggedIn || Boolean(storage.get(AUTH_STORAGE_KEY));

  return isLoggedIn ? <Route {...props} /> : <Redirect to="/not-found" />;
};

export default ProtectedRoute;
