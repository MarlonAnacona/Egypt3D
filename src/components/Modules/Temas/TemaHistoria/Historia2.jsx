import './Historia.css';
import { Link } from 'react-router-dom';

export function Historia2() {

  return (
    <div className="Contenedor">
      <div className="izquierda">
      <div className='navegacion'>
                    <Link to='/Historia1'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <h2>HISTORIA DE EGIPTO - DISTINCION</h2>
        <div className="contenido-modulo">
        Una de las maravillas más impresionantes de la antigua civilización egipcia son las Grandes Pirámides de Giza. Estas imponentes estructuras fueron construidas por orden del faraón Keops, también conocido como Jufu, quien perteneció a la Cuarta Dinastía del Antiguo Reino. Las pirámides, como la famosa Pirámide de Keops, estaban destinadas a servir como tumbas para los faraones, y se creía que aseguraban su ascenso al cielo y su vida eterna en el más allá.
        <br />
        <br />
        El sistema de escritura utilizado en el antiguo Egipto eran los jeroglíficos, una forma de escritura pictórica que combinaba símbolos y signos. Estos jeroglíficos se inscribían en templos, tumbas y monumentos, y se usaban para registrar eventos históricos, rituales religiosos y la vida cotidiana. Su desciframiento en el siglo XIX permitió un mayor conocimiento y comprensión de la antigua civilización egipcia.

        </div>
      </div>
      <div className="derecha">
        {/* Navegación hacia mas informacion del modulo */}
        <div className="navegacion">
          <Link to="/historia3">
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
              src="https://sketchfab.com/3d-models/cartoon-low-poly-egipt-giza-piramids-landmark-201d12a3ff7e4eaa922f7addf00ff1d1/embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
