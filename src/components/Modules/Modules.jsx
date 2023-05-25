import { useNavigate } from 'react-router-dom';
import './Modules.css'

export function Modules() {
  const navigate = useNavigate();

  const handleClick = (moduleName) => {
    const moduleLink = `/modulo${moduleName}`;
    navigate(moduleLink);
  };

  return (
    <div className="card-container">
      <div className="card" onClick={() => handleClick('Historia')}>
        <h3>Historia</h3>
        <p>Descubre el fascinante mundo de la civilización egipcia! Sumérgete en el pasado y déjate cautivar por una de las culturas más enigmáticas y poderosas de la antigüedad.</p>
      </div>
      <div className="card" onClick={() => handleClick('Arquitectura')}>
        <h3>Arquitectura</h3>
        <p>Adéntrate en la grandiosidad arquitectónica del antiguo Egipto. Descubre las majestuosas pirámides, testigos de la habilidad y el ingenio de una civilización perdurable.</p>
      </div>
      <div className="card" onClick={() => handleClick('Mitologia')}>
        <h3>Mitología</h3>
        <p>Embárcate en un viaje a través de los misterios de la mitología egipcia. Descubre un mundo fascinante lleno de dioses y diosas poderosos, cada uno con su propia historia y dominio. </p>
      </div>
      <div className="card" onClick={() => handleClick('Arte')}>
        <h3>Arte</h3>
        <p>Sumérgete en el cautivador mundo del arte egipcio, donde la belleza y el simbolismo se entrelazan en obras maestras perdurables. Descubre el arte en templos y tumbas, maravillándote con su precisión y meticuloso detalle.</p>
      </div>
      <div className="card" onClick={() => handleClick('Costumbres')}>
        <h3>Costumbres </h3>
        <p>Descubre las fascinantes costumbres de la antigua civilización egipcia. Sumérgete en una cultura rica en tradiciones y rituales que moldearon la vida cotidiana de sus habitantes.</p>
      </div>
    </div>
  );
}
