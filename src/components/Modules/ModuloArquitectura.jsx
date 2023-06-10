import { useNavigate } from 'react-router-dom';
import './estiloModulos.css';
import { Link } from 'react-router-dom';

export function ModuloArquitectura() {
    const navigate = useNavigate();

    // Manejar el clic en el botón de Quices
    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className='izquierda'>
                {/* Navegación hacia el módulo de Historia */}
                <div className='navegacion'>
                    <Link to='/moduloHistoria'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <div className='titulo-modulo'>ARQUITECTURA</div>
                <div className='contenido-modulo'>La arquitectura del antiguo Egipto es famosa por sus monumentos impresionantes y duraderos. Los egipcios construyeron grandes estructuras como las pirámides, templos y tumbas para honrar a los dioses y a los faraones. Las pirámides, como las de Giza, se erigieron como tumbas masivas y fueron construidas con precisión matemática. Los templos, como el Templo de Karnak, presentaban enormes columnas y relieves elaborados. También se construyeron mastabas, que eran tumbas de forma rectangular, y obeliscos altos y esbeltos. La arquitectura egipcia se caracteriza por su simetría, uso de jeroglíficos y adhesión a normas y proporciones estandarizadas. Estos monumentos arquitectónicos continúan asombrando al mundo con su grandeza y belleza hasta el día de hoy.</div>
                <button className='buttonQuiz' onClick={handleQuicesClick}>
                    <img src="/images/auditoria.png" alt="" />
                    QUIZ
                </button> {/* Redirecciona a '/quices' */}
            </div>
            <div className='derecha'>
                {/* Navegación hacia el módulo de Mitología */}
                <div className='navegacion'>
                    <Link to='/moduloMitologia'>
                        <img src="/images/navegarDer.png" alt="flecha" className="flecha_navegationDer" />
                    </Link>
                </div>
                <div className='titulo-modulo'>
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
                        src="https://sketchfab.com/3d-models/egyptian-tomb-anubis-ec630150198c4c98948c7b84669fa344/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
