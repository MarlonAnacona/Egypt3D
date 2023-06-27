import './Arquitectura.css';
import { Link } from 'react-router-dom';

export function Arquitectura1() {

  return (
    <div className="Contenedor">
      <div className="izquierda">
      <div className='navegacion'>
                    <Link to='/moduloArquitectura'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <h2>ARQUITECTURA - PIRAMIDES</h2>
        <div className="contenido-modulo">
        La arquitectura del antiguo Egipto es reconocida por sus imponentes estructuras funerarias y templos magníficos. Una de las estructuras funerarias más comunes utilizadas para enterrar a los faraones era la mastaba. Las mastabas eran construcciones rectangulares con paredes inclinadas y una pequeña capilla en su interior para albergar los rituales funerarios y las ofrendas a los difuntos.
        <br />
        <br />
        Sin embargo, la estructura más grande y emblemática construida en el antiguo Egipto y considerada una de las Siete Maravillas del Mundo Antiguo es la Gran Pirámide de Giza. Esta majestuosa pirámide, construida por el faraón Keops, se alza imponente en el horizonte y fue diseñada como la tumba final del faraón, asegurando su ascenso al más allá.

        </div>
      </div>
      <div className="derecha">
        {/* Navegación hacia mas informacion del modulo */}
        <div className="navegacion">
          <Link to="/arquitectura2">
            <img
              src="/images/navegarDer.png"
              alt="flecha"
              className="flecha_navegationDer"
            />
          </Link>
        </div>
        <div className="titulo-modulo">
          {/* Iframe con el modelo 3D de Sketchfab */}
          <div className="sketchfab-embed-wrapper">
            <iframe
              style={{
                width: '500px',
                height: '500px',
                borderRadius: '10px',
                boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.8)',
              }}
              title="Egipto"
              frameBorder="0"
              allowFullScreen={true}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/3d-models/great-pyramid-of-giza-c3cb6df9aca04b6da1d2ea7d0a9c2cb6/embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
