import React from "react";
import { app }from "../app";

const AUTH_REFRESH_INTERVAL = 5000;
let refreshTimer;


function applyAuthState() {
  if (app)
    app.setState({ authState });
}
function scheduleRefreshAuth() {
  refreshTimer = setTimeout(authState.refreshAuth, AUTH_REFRESH_INTERVAL);
}
function stopRefreshAuth() {
  clearTimeout(refreshTimer);
}


export const authState = {
  isAuthenticated: false,

  authenticate(cb) {
    authState.isAuthenticated = true;
    scheduleRefreshAuth();
    applyAuthState();
    setTimeout(cb, 100); // fake async
  },
  logout(cb) {
    authState.isAuthenticated = false;
    stopRefreshAuth();
    applyAuthState();
    setTimeout(cb, 100);
  },
  refreshAuth(cb) {
    scheduleRefreshAuth();
    if (cb) cb();
  }
};
const AuthContext = React.createContext(authState);
export default AuthContext;
