
import './estiloModuloCostumbres.css';
import { Link } from 'react-router-dom';

export function Costumbres1() {


  return (
    <div className="Contenedor">
      <div className="izquierda">
        {/* Navegación hacia el módulo de Arte */}
        <div className="navegacion">
          <Link to="/moduloCostumbres">
            <img
              src="/images/navegarIzq.png"
              alt="flecha"
              className="flecha_navegationIzq"
            />
          </Link>
        </div>
        <h2>COSTUMBRES - BEBIDA Y VESTIMENTA</h2>
        <div className="contenido-modulo">
          Las costumbres y la vida diaria de los antiguos egipcios estaban estrechamente influenciadas por el río Nilo, que desempeñaba un papel fundamental en su sociedad. El Nilo proporcionaba agua para el riego de los campos, lo que permitía una agricultura próspera, y también servía como una importante vía de transporte.
          <br />
          <br />
          La bebida más popular en el antiguo Egipto era la cerveza. Los antiguos egipcios elaboraban cerveza a partir de cebada y la consumían tanto en ocasiones especiales como en la vida cotidiana. La cerveza tenía un papel importante en las celebraciones religiosas y también era parte de la ración diaria de los trabajadores.
          <br />
          <br />
          La vestimenta típica de los antiguos egipcios consistía en una túnica de lino. Tanto hombres como mujeres llevaban una túnica larga que se envolvía alrededor del cuerpo y se sujetaba con un cinturón. El lino era un material abundante en Egipto y se consideraba fresco y adecuado para el clima cálido.

        </div>
      </div>
      <div className="derecha">
        <div className="navegacion">
          <Link to="/costumbres2">
            <img
              src="/images/navegarDer.png"
              alt="flecha"
              className="flecha_navegationDer"
            />
          </Link>
        </div>
        <div className="titulo-modulo">
          {/* Iframe con el modelo 3D de Sketchfab */}
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
            src="https://sketchfab.com/3d-models/beer-mug-357e557af053486ca2bbbe5c0222964f/embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
