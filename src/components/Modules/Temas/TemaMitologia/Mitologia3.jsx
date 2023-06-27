import './Mitologia.css';
import { Link } from 'react-router-dom';

export function Mitologia3() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arquitectura */}
                <div className="navegacion">
                    <Link to="/mitologia2">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>MITOLOGIA - BASTET, HAPI, AMON</h2>
                <div className="contenido-modulo">
                    Bastet era la diosa leona, protectora de la familia y el hogar. Con cabeza de león o como una mujer con cabeza de león, era adorada como una diosa benevolente y era símbolo de la maternidad y la protección.                <br />
                    <br />
                    Hapi era el dios del Nilo y la fertilidad. Representado como un hombre con pechos prominentes y una barba rizada, se creía que Hapi traía las inundaciones anuales del Nilo, que eran esenciales para la fertilidad de la tierra y el sustento del pueblo egipcio.
                    <br />
                    <br />
                    Amón-Ra era el dios creador del universo y el faraón. Era una combinación de los dioses Amón y Ra, y su adoración alcanzó su máximo esplendor durante el Imperio Nuevo. Como dios supremo, se creía que Amón-Ra otorgaba poder y legitimidad al faraón, considerado su representante en la Tierra.
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/mitologia4">
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
                        src="https://sketchfab.com/3d-models/amon-ra-a7ea7eb693eb454aa4079300b1902f21/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
