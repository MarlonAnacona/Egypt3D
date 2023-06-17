import React, { useState } from 'react';
import styles from './Home.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Footer } from '../Footer/Footer'; 

export function Home() {
  // Eliminar el token del almacenamiento local y establecer el estado de inicio de sesión en falso al cargar el componente
  useEffect(() => {
    localStorage.removeItem("token");
    setIsLogged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { setIsLogged } = useContext(LoginContext); // Obtener el contexto de inicio de sesión

  const [currentSection, setCurrentSection] = useState(1); // Estado para controlar la sección actual

  const handleSectionChange = (sectionNumber) => {
    setCurrentSection(sectionNumber);
  };

  return (
    <div className={styles['home_page']}>
      {currentSection === 1 && (
        <div className={styles['bienvenida']}>
          {currentSection !== 1 && (
            <button className={styles['circle_button1']} onClick={() => handleSectionChange(1)}>
              <img src="/images/flecha-correcta.png" alt="Icono de la sección 1" />
            </button>
          )}
          {currentSection !== 2 && (
            <button className={styles['circle_button1']} onClick={() => handleSectionChange(2)}>
              <img src="/images/flecha-correcta.png" alt="Icono de la sección 1" />
            </button>
          )}
        </div>
      )}

      {currentSection === 2 && (
        <div className={styles['informacion']}>
          {currentSection !== 1 && (
            <button className={styles['circle_button']} onClick={() => handleSectionChange(1)}>
              <img src="/images/flecha-correcta1.png" alt="Icono de la sección 1" />
            </button>
          )}
          {currentSection !== 2 && (
            <button className={styles['circle_button']} onClick={() => handleSectionChange(2)}>
              <img src="/images/flecha-correcta1.png" alt="Icono de la sección 1" />
            </button>
          )}
          <div className={styles['page_notices']}></div>
          <div className={styles['page_foro']}></div>
        </div>
      )}
      <Footer visible={true} />
    </div>
  );
}