import React from "react";
import { Route, Redirect } from "react-router-dom";

import { storage } from "utils/storage";
import { AUTH_STORAGE_KEY } from "utils/constants";

const ProtectedRoute = (props: any) => {
  // No idea why useAuth() doesn't return the correct value only here...
  const isLoggedIn = Boolean(storage.get(AUTH_STORAGE_KEY));

  return isLoggedIn ? <Route {...props} /> : <Redirect to="/not-found" />;
};

export default ProtectedRoute;
