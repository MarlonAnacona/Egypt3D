import { useNavigate } from 'react-router-dom';
import './estiloModulos.css'
import { Link } from 'react-router-dom';

export function ModuloArquitectura() {
    const navigate = useNavigate();

    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className='izquierda'>
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
                <div className='navegacion'>
                    <Link to='/moduloMitologia'>
                        <img src="/images/navegarDer.png" alt="flecha" className="flecha_navegationDer" />
                    </Link>
                </div>
                <div className='titulo-modulo'>Aqui va el modelo 3d uwu</div>
            </div>
        </div>
    )
}