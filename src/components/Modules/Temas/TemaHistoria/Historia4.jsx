import './Historia.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Historia4() {

    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className="izquierda">
                <div className='navegacion'>
                    <Link to='/Historia3'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <h2>HISTORIA DE EGIPTO - PRIMER FARAON</h2>
                <div className="contenido-modulo">
                    En los albores de la civilización egipcia, Narmer, también conocido como Menes, se considera el primer faraón de Egipto. Narmer unificó el Alto y Bajo Egipto, estableciendo así las bases para una de las civilizaciones más duraderas y poderosas del mundo antiguo.
                <br />
                <br />
                <p style={{
                    fontSize: '1.5rem'
                }}>Has completado todo el modulo de Historia de Egipto, ya estas listo para realizar el QUIZ.
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
                {/* Navegación hacia mas informacion del modulo */}
                <div className="navegacion">
                    <Link to="/videoHistoria">
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
                            src="https://sketchfab.com/3d-models/pharaohs-khafre-god-horus-ramesses-ii-d8e43c1622f34f07889700ffe03f1848/embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
