import { useNavigate } from 'react-router-dom';
import './estiloModuloCostumbres.css';
import { Link } from 'react-router-dom';

export function Costumbres4() {

    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/costumbres3">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>COSTUMBRES - FUNERALES</h2>
                <div className="contenido-modulo">
                    En las tumbas del antiguo Egipto, era común realizar momificaciones. Los egipcios creían en la vida después de la muerte y consideraban la preservación del cuerpo como esencial para la vida eterna. Las momificaciones implicaban la extracción de los órganos internos, el tratamiento del cuerpo con sustancias conservantes y su envoltura en vendas de lino para asegurar su preservación.
                    <br />
                    <br />
                    <p style={{
                        fontSize: '1.5rem'
                    }}>Has completado todo el modulo de Costumbres de Egipto, ya estas listo para realizar el QUIZ.
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
                <div className="navegacion">
                    <Link to="/videoCostumbres">
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
                        src="https://sketchfab.com/3d-models/old-kingdom-sarcophagus-of-ptahsedjefa-fifi-c43f5cc122f84acab087cdcdd5f41d8b/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
