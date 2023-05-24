import { useNavigate } from 'react-router-dom';
import './Modules.css'

export function Modules() {
  const navigate = useNavigate();

  const handleClick = (moduleId) => {
    const moduleLink = `/modulo${moduleId}`;
    navigate(moduleLink);
  };

  return (
    <div className="card-container">
      <div className="card" onClick={() => handleClick(1)}>
        <h3>Historia</h3>
        <p>Descripción del módulo 1...</p>
      </div>
      <div className="card" onClick={() => handleClick(2)}>
        <h3>Arquitectura</h3>
        <p>Descripción del módulo 2...</p>
      </div>
      <div className="card" onClick={() => handleClick(3)}>
        <h3>Mitología</h3>
        <p>Descripción del módulo 3...</p>
      </div>
      <div className="card" onClick={() => handleClick(4)}>
        <h3>Arte</h3>
        <p>Descripción del módulo 4...</p>
      </div>
      <div className="card" onClick={() => handleClick(5)}>
        <h3>Costumbres </h3>
        <p>Descripción del módulo 5...</p>
      </div>
    </div>
  );
}
