import React, { useContext, useEffect, useState } from "react";
import styles from './Navbar.module.css';
import { LoginContext } from "../context/LoginContext";
import { getImageProfile, getUser } from "../../Services/users";
import jwt_decode from "jwt-decode";
import ImagenModal from "../modal/Modal";

const Navbar = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Nuevo estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Obtener el estado de inicio de sesión del contexto
  const { isLogged, setIsLogged } = useContext(LoginContext);

  // Estado para almacenar el nombre del usuario
  const [name, setName] = useState('');

  // Estado para almacenar la imagen de perfil seleccionada
  const [selectedImage, setSelectedImage] = useState("/images/perfil.png");

  // ...

  // Manejar la apertura del modal de ayuda
  const handleOpenHelp = (event) => {
    event.preventDefault(); // Prevenir la navegación por defecto del enlace
    setModalIsOpen(true); // Abrir el modal
  };

  // Manejar el cierre de sesión
  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  // Obtener los datos del usuario al cargar el componente o cuando el estado de inicio de sesión cambie
  useEffect(() => {
    if (isLogged) {
      const data = jwt_decode(localStorage.getItem("token"));

      getUser(data.user_id).then((response) => {
        setName(response.username);
        setSelectedImage(response.profile_image);

        if (response.profile_image) {
          getImageProfile(response.profile_image).then((imageResponse) => {
            setSelectedImage(imageResponse.profile_image);
          });
        }
      });
    }
    
  }, [isLogged]);

  return (
    <div className={styles.Navbar}>
      {/* Logo */}
      <img src="/images/logo.png" alt="Logo" className={styles['nav-logo']} />
      <span className={styles['nav-title']}>Egypt 3D</span>

      {/* Imagen de perfil */}
      {isLogged && <img src={selectedImage} alt="Avatar" className={styles['nav-logo']} />}

      {/* Menú desplegable */}
      <div className={`${styles['nav-items']} ${isOpen && styles.open}`}>
        {/* Mostrar elementos del menú según el estado de inicio de sesión */}
        {isLogged && <a href="/profile" className={styles['nav-items']}>{name}</a>}
        {isLogged && <a href="/modules">Modulos</a>}
        {!isLogged && <a href="/">Inicio</a>}
        {!isLogged && <a href="/register">Registrate</a>}
        {!isLogged && <a href="/login">Inicia Sesión</a>}
        {<a href="/" onClick={handleOpenHelp}> Ayuda</a>}
        {isLogged && (
          <a href="/" onClick={handleLogout}>
            Cerrar Sesión
          </a>
        )}
        {/* Modal de imagen */}
        <ImagenModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
      </div>

      {/* Botón de alternar menú desplegable */}
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
