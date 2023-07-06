import './Arquitectura.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Arquitectura4() {

    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate('/quices2'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className="izquierda">
                <div className='navegacion'>
                    <Link to='/arquitectura3'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <h2>ARQUITECTURA - SALAS</h2>
                <div className="contenido-modulo">
                    La sala hipóstila era una estructura arquitectónica común en los templos egipcios. Consistía en una serie de pilares unidos por un techo y se utilizaba para albergar ofrendas y rituales religiosos. Estas salas eran impresionantes tanto en tamaño como en decoración, con hermosos relieves y jeroglíficos tallados en los pilares y paredes. La sala hipóstila proporcionaba un espacio sagrado y solemne donde los sacerdotes y los adoradores podían realizar sus rituales y venerar a los dioses.
                    <br />
                    <br />
                    <p style={{
                        fontSize: '1.5rem'
                    }}>Has completado todo el modulo de Arquitectura de Egipto, ya estas listo para realizar el QUIZ.
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
                    <Link to="/videoArquitectura">
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
                            src="https://sketchfab.com/3d-models/egyptian-temple-c46e7c4460ab4bea9628823a037068ed/embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
