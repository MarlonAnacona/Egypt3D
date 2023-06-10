import React, { useContext, useState } from "react";
import "./Navbar.css";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  //const [isLoggedIn, setIsLoggedIn]=useState(false)
  const {isLogged,setIsLogged}=useContext(LoginContext)
  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token")
    setIsLogged(false);
  };
  return (
    <div className="Navbar">
    <img src="/images/logo.png" alt="Logo" className="nav-logo" />
    <span className="nav-title">Egypt 3D</span>
    <div className={`nav-items ${isOpen && "open"}`}>
      {isLogged && <a href="/profile">Perfil</a>}
      {isLogged && <a href="/modules">Modulos</a>}
      {!isLogged && <a href="/">Inicio</a>}
      {!isLogged && <a href="/register">Registrate</a>}
      {!isLogged && <a href="/login">Inicia Sesion</a>}
      
      {isLogged && <a href="/" onClick={handleLogout}>Cerrar Sesión</a>}
    </div>
    <div
      className={`nav-toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="bar"></div>
    </div>
  </div>
  );
};

export default Navbar;
