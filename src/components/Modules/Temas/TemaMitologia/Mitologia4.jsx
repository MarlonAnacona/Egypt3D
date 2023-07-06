import './Mitologia.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Mitologia4() {

    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate('/quices3'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arquitectura */}
                <div className="navegacion">
                    <Link to="/mitologia3">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <div className="contenido-modulo">
                    <p style={{
                        fontSize: '1.5rem'
                    }}>Has completado todo el modulo de Mitologia de Egipto, ya estas listo para realizar el QUIZ.
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
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/videoMitologia">
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
                        src="https://sketchfab.com/3d-models/anubis-ii-01b73b03056f4b73a3b129f8c9b83f3b/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
