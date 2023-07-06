import "./Arte.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Arte4() {

    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate("/quices4"); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Mitología */}
                <div className="navegacion">
                    <Link to="/arte3">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>ARTE - TEMPLO</h2>
                <div className="contenido-modulo">
                    Las pirámides eran las estructuras arquitectónicas utilizadas para albergar los cuerpos embalsamados de los faraones. Estas enormes construcciones, como la Gran Pirámide de Giza, representaban los complejos rituales y religiosos asociados con la vida después de la muerte en el antiguo Egipto.                <br />
                    <br />
                    <p style={{
                        fontSize: '1.5rem'
                    }}>Has completado todo el modulo de Arte de Egipto, ya estas listo para realizar el QUIZ.
                        <br />
                        <br />
                        Adicional a esto, en el apartado de la derecha tendras un video con el cual vas a nutrir mas tu conocimiento.
                    </p>

                </div>
                <button className="buttonQuiz" onClick={handleQuicesClick}>
                    <img src="/images/auditoria.png" alt="" />
                    QUIZ
                </button> {/* Redirecciona a '/quices' */}
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Costumbres */}
                <div className="navegacion">
                    <Link to="/videoArte">
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
                            width: "500px",
                            height: "500px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
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
                        src="https://sketchfab.com/3d-models/egyptian-relief-walk-in-the-garden-b03f0585bc2a4582b4c9b346acac8863/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
