import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [dash, setDash] = useState();
  const [sideOpen , setSideOpen] = useState(true)

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, dash, setDash,sideOpen,setSideOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
