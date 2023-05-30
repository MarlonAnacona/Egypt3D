import { useNavigate } from 'react-router-dom';
import './estiloModulos.css'

export function ModuloCostumbres() {
    const navigate = useNavigate();

    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className='izquierda'>
                <div className='titulo-modulo'>COSTUMBRES</div>
                <div className='contenido-modulo'>Las costumbres del antiguo Egipto reflejaban la vida cotidiana y las creencias arraigadas en esta antigua civilización. Los egipcios tenían una sociedad jerárquica y organizada, donde el faraón era considerado un dios en la Tierra y gobernaba con poder absoluto. La religión desempeñaba un papel central en la vida de los egipcios, y se practicaban rituales y ceremonias para honrar a los dioses y asegurar la prosperidad y la vida después de la muerte. La vida familiar era valorada, y el matrimonio y la crianza de los hijos eran considerados importantes. La agricultura era la base de la economía, y los egipcios desarrollaron sistemas de irrigación para aprovechar el Nilo y cultivar sus tierras fértiles. Además, el comercio y la artesanía florecieron, y se produjeron objetos como joyas, cerámica y textiles de alta calidad.</div>
                <button className='buttonQuiz' onClick={handleQuicesClick}>
                    <img src="/images/auditoria.png" alt="" />
                    QUIZ
                </button> {/* Redirecciona a '/quices' */}
            </div>
            <div className='derecha'>
                <div className='titulo-modulo'>Aqui va el modelo 3d uwu</div>
            </div>
        </div>
    )
}