import React, { useContext, useEffect, useState } from "react";
import styles from './Navbar.module.css';
import { LoginContext } from "../context/LoginContext";
import { getImageProfile, getUser } from "../../Services/users";
import jwt_decode from "jwt-decode";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const [name, setName] = useState('');

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token");
    setIsLogged(false);
  };
  const [selectedImage, setSelectedImage] = useState("/images/perfil.png");

  useEffect(()=>{
    if(isLogged){
      const data= jwt_decode(localStorage.getItem("token"))

      // Obtener los datos del usuario al cargar el componente
      getUser(data.user_id).then((response)=>{
        setName(response.username)
        setSelectedImage(response.profile_image)
        if(response.profile_image){
          getImageProfile(response.profile_image).then((imageResponse=>{
            setSelectedImage(imageResponse.profile_image)  
          }))
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLogged])
  

  return (
    <div className={styles.Navbar}>
      <img src="/images/logo.png" alt="Logo" className={styles['nav-logo']} />
      <span className={styles['nav-title']}>Egypt 3D</span>
     {isLogged && <img src={selectedImage} alt="Avatar"className={styles['nav-logo']}/>}
     
      <div className={`${styles['nav-items']} ${isOpen && styles.open}`}>
       
        {/* Mostrar elementos del menú según el estado de inicio de sesión */}
        {isLogged && <a href ="/profile" className={styles['nav-items']}>{name}</a>}

        {isLogged && <a href="/profile">Perfil</a>}
        {isLogged && <a href="/modules">Modulos</a>}
        
        {isLogged && <a href="/">Inicio</a>}
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
