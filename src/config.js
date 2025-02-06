export default {
  oidc: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    issuer: process.env.REACT_APP_ISSUER,
    redirectUri: window.location.origin + "/login/callback",
    scopes: ["openid", "profile", "email", "offline_access"],
  },
};
