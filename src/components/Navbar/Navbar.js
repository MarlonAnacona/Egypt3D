import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Egypt 3D</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Inicio</a>
        <a href="/modules">Modulos</a>
        <a href="/register">Registrate</a>
        <a href="/login">Inicia Sesion</a>
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
