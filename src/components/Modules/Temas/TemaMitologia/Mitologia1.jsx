import './Mitologia.css';
import { Link } from 'react-router-dom';

export function Mitologia1() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arquitectura */}
                <div className="navegacion">
                    <Link to="/moduloMitologia">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>MITOLOGIA - RA, ANUBIS, ATHOR</h2>
                <div className="contenido-modulo">
                La mitología egipcia está llena de dioses y diosas que representaban diferentes aspectos de la vida y el universo. Uno de los dioses más prominentes era Ra, el dios del sol. Ra era considerado el creador y dador de vida, y su imagen era representada con cabeza de halcón y un disco solar sobre ella.
                <br />
                <br />
                Anubis era el dios asociado con la muerte y el embalsamamiento. Con cabeza de chacal, era el encargado de guiar a las almas hacia el más allá y proteger los cuerpos embalsamados. Su papel era fundamental en los rituales funerarios y el juicio de las almas.
                <br />
                <br />
                Hathor era la diosa del amor y la belleza en la mitología egipcia. Representada con cabeza de vaca, era considerada la madre de la humanidad y protectora de la alegría y la música.
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/mitologia2">
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
                        src="https://sketchfab.com/3d-models/hathor-cow-head-gilded-head-of-hathor-5c746d02e1bb470e83ffc7dc0c0300b7/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
