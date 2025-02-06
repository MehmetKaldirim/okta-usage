import React, { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import { useOktaAuth } from "@okta/okta-react";

const SignInWidget = ({ baseUrl, onSuccess, onError }) => {
  const { authState } = useOktaAuth();
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current || authState?.isAuthenticated) {
      return;
    }

    const widget = new OktaSignIn({
      baseUrl,
      clientId: "YOUR_CLIENT_ID",
      redirectUri: "YOUR_REDIRECT_URI",
      logo: "logo.png",
      authParams: {
        issuer: "https://YOUR_OKTA_DOMAIN/oauth2/default",
        scopes: ["openid", "profile", "email"],
      },
    });

    widget.renderEl({ el: widgetRef.current }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [authState, baseUrl, onSuccess, onError]);

  return <div ref={widgetRef} />;
};

export default SignInWidget;
