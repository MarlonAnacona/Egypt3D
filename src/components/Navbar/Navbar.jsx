import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false);
  };
  return (
    <div className="Navbar">
    <img src="/images/logo.png" alt="Logo" className="nav-logo" />
    <span className="nav-title">Egypt 3D</span>
    <div className={`nav-items ${isOpen && "open"}`}>
      {isLoggedIn && <a href="/Inicio">Inicio</a>}
      {isLoggedIn && <a href="/modules">Modulos</a>}
      {!isLoggedIn && <a href="/register">Registrate</a>}
      {!isLoggedIn && <a href="/login">Inicia Sesion</a>}
      {isLoggedIn && <a href="/" onClick={handleLogout}>Cerrar Sesión</a>}
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
