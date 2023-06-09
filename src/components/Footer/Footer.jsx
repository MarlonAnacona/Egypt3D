import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LoginContext } from "../context/LoginContext";

export function Footer({ visible }) {

  const { isLogged } = useContext(LoginContext);

  if (!visible) {
    return null; // No se muestra el footer si no es visible
  }

  return (
    <footer className={styles['footer-distributed']}>
      <div className={styles['footer-right']}>
        {/* Enlaces de redes sociales */}
        <a href="/"><FontAwesomeIcon icon={faPaypal} /></a>
        <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/MarlonAnacona/Egypt3D" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <div className={styles['footer-left']}>
        <p className={styles['footer-links']}>
          {!isLogged && <a className="link-1" href="/">Inicio</a>}
          <a href="/news">Noticias</a>
          <a href="/about">Sobre Nosotros</a>
          <a href="https://forms.gle/bY3ypcUe2Dk1Y2549" target='blank'>Sugerencias</a>
          <a href="/contact">Contactanos</a>
        </p>

        <p>Egypt 3D &copy; 2023</p>
      </div>
    </footer>
  );
}
