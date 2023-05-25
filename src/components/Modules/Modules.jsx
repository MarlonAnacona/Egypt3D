import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Modules.css";

export function Modules() {
  const navigate = useNavigate();

  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (moduleName) => {
    const moduleLink = `/modulo${moduleName}`;
    navigate(moduleLink);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${activeCard === "Historia" ? "active" : ""}`}
        onMouseEnter={() => setActiveCard("Historia")}
        onMouseLeave={() => setActiveCard(null)}
        onClick={() => handleClick("Historia")}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/historia.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>Historia</h3>
        <div className="overlay">
          <div className="overlay-text">
            <p>
              Descubre el fascinante mundo de la civilización egipcia! Sumérgete
              en el pasado y déjate cautivar por una de las culturas más
              enigmáticas y poderosas de la antigüedad.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`card ${activeCard === "Arquitectura" ? "active" : ""}`}
        onMouseEnter={() => setActiveCard("Arquitectura")}
        onMouseLeave={() => setActiveCard(null)}
        onClick={() => handleClick("Arquitectura")}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/arquitectura.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>Arquitectura</h3>
        <div className="overlay">
          <div className="overlay-text">
            <p>
              Adéntrate en la grandiosidad arquitectónica del antiguo Egipto.
              Descubre las majestuosas pirámides, testigos de la habilidad y el
              ingenio de una civilización perdurable.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`card ${activeCard === "Mitologia" ? "active" : ""}`}
        onMouseEnter={() => setActiveCard("Mitologia")}
        onMouseLeave={() => setActiveCard(null)}
        onClick={() => handleClick("Mitologia")}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/mitologia.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>Mitologia</h3>
        <div className="overlay">
          <div className="overlay-text">
            <p>
              Embárcate en un viaje a través de los misterios de la mitología
              egipcia. Descubre un mundo fascinante lleno de dioses y diosas
              poderosos, cada uno con su propia historia y dominio.{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`card ${activeCard === "Arte" ? "active" : ""}`}
        onMouseEnter={() => setActiveCard("Arte")}
        onMouseLeave={() => setActiveCard(null)}
        onClick={() => handleClick("Arte")}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Arte.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>Arte</h3>
        <div className="overlay">
          <div className="overlay-text">
            <p>
              Sumérgete en el cautivador mundo del arte egipcio, donde la
              belleza y el simbolismo se entrelazan en obras maestras
              perdurables. Descubre el arte en templos y tumbas, maravillándote
              con su precisión y meticuloso detalle.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`card ${activeCard === "Costumbres" ? "active" : ""}`}
        onMouseEnter={() => setActiveCard("Costumbres")}
        onMouseLeave={() => setActiveCard(null)}
        onClick={() => handleClick("Costumbres")}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/costumbres.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>Costumbres</h3>
        <div className="overlay">
          <div className="overlay-text">
            <p>
              Descubre las fascinantes costumbres de la antigua civilización
              egipcia. Sumérgete en una cultura rica en tradiciones y rituales
              que moldearon la vida cotidiana de sus habitantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
