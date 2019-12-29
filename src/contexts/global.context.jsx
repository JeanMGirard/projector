import React from "react";
import AuthContext from "./auth.context";



export const GlobalContext = (props) => (
  <AuthContext.Provider value={props.authState}>
      {props.children}
  </AuthContext.Provider>
);
export default GlobalContext;
