import React, { useState } from 'react';
import './Home.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export function Home() {
  useEffect(()=>{
    localStorage.removeItem("token")
    setIsLogged(false)

  },[])
  const { setIsLogged } = useContext(LoginContext);

  const [currentSection, setCurrentSection] = useState(1);

  const handleSectionChange = (sectionNumber) => {
    setCurrentSection(sectionNumber);
  };

  return (
    <div className="home_page">
      {currentSection === 1 && (
        <div className="bienvenida">
          {currentSection !== 1 && (
            <button className="circle_button1" onClick={() => handleSectionChange(1)}>
                 <img src="/images/flecha-correcta.png" alt="Icono de la sección 1" />
            </button>
          )}
          {currentSection !== 2 && (
            <button className="circle_button1" onClick={() => handleSectionChange(2)}>
                <img src="/images/flecha-correcta.png" alt="Icono de la sección 1" />
            </button>
          )}
        </div>
      )}

      {currentSection === 2 && (
        <div className="informacion">
          {currentSection !== 1 && (
            <button className="circle_button" onClick={() => handleSectionChange(1)}><img src="/images/flecha-correcta1.png" alt="Icono de la sección 1" /></button>
          )}
          {currentSection !== 2 && (
            <button className="circle_button" onClick={() => handleSectionChange(2)}><img src="/images/flecha-correcta1.png" alt="Icono de la sección 1" /></button>
          )}
          <div className='page_notices'>

          </div>
          <div className='page_foro'></div>
        </div>
      )}
    </div>
  );
}
