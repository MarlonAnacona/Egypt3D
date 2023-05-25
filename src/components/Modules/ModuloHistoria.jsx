import { useNavigate } from 'react-router-dom';
import './estiloModulos.css';

export function ModuloHistoria() {
    const navigate = useNavigate();

    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className='izquierda'>
                <div className='titulo-modulo'>Soy el titulo</div>
                <div className='contenido-modulo'>Soy el contenido</div>
                <button>Botón de más información</button> {/* Redirecciona a '/informacion' */}
                <button onClick={handleQuicesClick}>Botón de quices</button> {/* Redirecciona a '/quices' */}
            </div>
            <div className='derecha'>
                <div className='titulo-modulo'>Aqui va el modelo 3d uwu</div>
            </div>
        </div>
    );
}
