import React, { createContext, useState, useLayoutEffect } from "react";

export const LoginContext = createContext(); // Crear el contexto de inicio de sesión

export function LoginWrapper({ children }) {
  const [isLogged, setIsLogged] = useState(false); // Estado para controlar si el usuario está autenticado

  useLayoutEffect(() => {
    // Verificar si hay un token almacenado en el localStorage al cargar el componente
    const data = localStorage.getItem("token");
    if (data) {
      setIsLogged(true); // Establecer el estado de inicio de sesión en true si hay un token
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children} {/* Renderizar los componentes hijos */}
    </LoginContext.Provider>
  );
}
