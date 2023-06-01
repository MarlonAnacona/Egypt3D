import React, { createContext, useState, useLayoutEffect } from "react";

export const LoginContext = createContext();

export function LoginWrapper({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useLayoutEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      setIsLogged(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
}