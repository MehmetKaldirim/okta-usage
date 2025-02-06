import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom"; // Redirect yerine Navigate kullanıyoruz
import SignInWidget from "./SignInWidget";

const Login = ({ baseUrl }) => {
  const { authState, oktaAuth } = useOktaAuth();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated !== authenticated) {
      setAuthenticated(authState?.isAuthenticated);
    }
  }, [authState, authenticated]);

  const onSuccess = (res) => {
    oktaAuth.signInWithRedirect({
      sessionToken: res.session.token,
    });
  };

  const onError = (err) => {
    console.error("Error logging in", err);
  };

  if (authenticated === null) return null;
  return authenticated ? (
    <Navigate to="/" replace /> // Redirect yerine Navigate kullandık
  ) : (
    <SignInWidget baseUrl={baseUrl} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
