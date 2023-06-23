import './Mitologia.css';
import { Link } from 'react-router-dom';

export function Mitologia2() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arquitectura */}
                <div className="navegacion">
                    <Link to="/mitologia1">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <div className="contenido-modulo">
                Osiris era el dios del inframundo y el juicio de las almas. Era el encargado de juzgar a los difuntos en la vida después de la muerte y asegurar su eternidad. Osiris también era considerado el dios de la fertilidad y el renacimiento.
                <br />
                <br />
                Set era el dios del viento y la tormenta. A menudo representado con cabeza de animal desconocido, era un dios temido debido a su naturaleza violenta y caótica. Su rivalidad con Horus, el dios del cielo y la guerra, era una parte importante de la mitología egipcia.
                <br />
                <br />
                Nut era la diosa del cielo y la fertilidad. Representada como una mujer arqueada sobre la Tierra, se creía que Nut daba a luz al sol cada día y protegía a los vivos bajo su manto celestial.
                <br />
                <br />
                Thot era el dios del conocimiento, la sabiduría y la escritura. Representado con cabeza de ibis, se le atribuía la invención de la escritura y se consideraba el mediador entre los dioses y los humanos.
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/mitologia3">
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
                        src="https://sketchfab.com/3d-models/statue-of-osiris-34d551e720074888ad3efc2e429f4ac7/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
