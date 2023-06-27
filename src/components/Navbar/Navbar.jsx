import React, { useContext, useState } from "react";
import styles from './Navbar.module.css';
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <div className={styles.Navbar}>
      <img src="/images/logo.png" alt="Logo" className={styles['nav-logo']} />
      {isLogged && <a className={styles['nav-title']} href="/modules">Egypt 3D</a>}
      {!isLogged && <a className={styles['nav-title']} href="/">Egypt 3D</a>}
      <div className={`${styles['nav-items']} ${isOpen && styles.open}`}>
        {/* Mostrar elementos del menú según el estado de inicio de sesión */}
        {isLogged && <a href="/profile">Perfil</a>}
        {isLogged && <a href="/modules">Modulos</a>}
        {!isLogged && <a href="/">Inicio</a>}
        {!isLogged && <a href="/register">Registrate</a>}
        {!isLogged && <a href="/login">Inicia Sesión</a>}
        {isLogged && (
          <a href="/" onClick={handleLogout}>
            Cerrar Sesión
          </a>
        )}
      </div>
      <div
        className={`${styles['nav-toggle']} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="nav-toggle"
      >
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}

export default Navbar;
