import './Historia.css';
import { Link } from 'react-router-dom';

export function Historia1() {
  return (
    <div className="Contenedor">
      <div className="izquierda">
      <div className='navegacion'>
                    <Link to='/moduloHistoria'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
        <div className="contenido-modulo">
        El antiguo Egipto, una de las civilizaciones más fascinantes de la historia, se desarrolló a lo largo de las riberas del río Nilo, el río principal que atravesaba esta antigua tierra. El Nilo fue una fuente vital de vida para los egipcios, ya que proporcionaba agua para la agricultura, transporte y pesca, además de ser un símbolo de fertilidad y renovación. Las crecidas anuales del Nilo dejaban sedimentos fértiles en las tierras circundantes, permitiendo el cultivo de una amplia variedad de cultivos.
        <br />
        <br />
        Durante el Reino Nuevo, una de las épocas más prósperas del antiguo Egipto, la capital se estableció en Tebas. Situada en la orilla oriental del Nilo, Tebas se convirtió en un centro político y religioso de gran importancia. Allí se erigieron majestuosos templos y tumbas, y la ciudad albergaba al poderoso faraón, quien gobernaba con autoridad divina.

        </div>
      </div>
      <div className="derecha">
        {/* Navegación hacia mas informacion del modulo */}
        <div className="navegacion">
          <Link to="/historia2">
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
              src="https://sketchfab.com/3d-models/egyptian-boat-builder-22ea8cb1b4f349699bda1aecdbd33415/embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
