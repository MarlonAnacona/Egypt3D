import './Historia.css';
import { Link } from 'react-router-dom';

export function Historia3() {

  return (
    <div className="Contenedor">
      <div className="izquierda">
      <div className='navegacion'>
                    <Link to='/Historia2'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
        <div className="contenido-modulo">
        La religión desempeñaba un papel central en la vida de los egipcios, y se adoraba a una multitud de dioses y diosas. Entre ellos, Anubis, representado con cabeza de chacal, era el dios asociado con el embalsamamiento y el más allá. Ra, el dios del sol, era ampliamente adorado y se le atribuía el poder de dar vida y sustentar el universo.
        <br />
        <br />
        Además de su legado arquitectónico y religioso, el antiguo Egipto también es conocido por el proceso de momificación, que se utilizaba para preservar los cuerpos de los difuntos. La momificación implicaba una serie de rituales y técnicas que permitían la conservación del cuerpo para su vida después de la muerte, según las creencias egipcias en la vida más allá de la tumba.
        <br />
        <br />
        Entre las reinas más famosas de Egipto destaca Nefertiti, conocida por su belleza legendaria. Esposa del faraón Akenatón, Nefertiti desempeñó un papel destacado en la vida religiosa y política de la época, y su imagen es icónica en la historia del arte egipcio.

        
        </div>
      </div>
      <div className="derecha">
        {/* Navegación hacia mas informacion del modulo */}
        <div className="navegacion">
          <Link to="/historia4">
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
              src="https://sketchfab.com/3d-models/chara-egyptian-girl-f6005f7daaa549a5b3c46bce676fda10/embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
