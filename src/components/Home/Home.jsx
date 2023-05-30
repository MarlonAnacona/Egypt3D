import React, { useState } from 'react';
import './Home.css';

export function Home() {
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
          <h2>Sección Noticias y foro</h2>
        </div>
      )}
    </div>
  );
}
