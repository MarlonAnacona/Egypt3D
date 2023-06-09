import { useNavigate } from 'react-router-dom';
import './estiloModulos.css';
import { Link } from 'react-router-dom';

export function ModuloHistoria() {
    const navigate = useNavigate();

    const handleQuicesClick = () => {
        navigate('/quices'); // Redirige a la ruta '/quices'
    };

    return (
        <div className="Contenedor">
            <div className='izquierda1'>
                <div className='titulo-modulo'>HISTORIA DE EGIPTO</div>
                <div className='contenido-modulo'>Egipto, una antigua civilización en el noreste de África, tiene una historia que abarca miles de años. Los faraones gobernaron como líderes divinos y construyeron las famosas pirámides. Durante el período helenístico, Egipto estuvo bajo el dominio de los ptolomeos, una dinastía macedonia. En el año 30 a.C., Egipto fue anexado por el Imperio Romano. Aunque la era faraónica llegó a su fin, la influencia de la cultura egipcia perduró en el Imperio Romano, especialmente a través de los cultos a Isis y Serapis.</div>
                <button className='buttonQuiz' onClick={handleQuicesClick}>
                    <img src="/images/auditoria.png" alt="" />
                    QUIZ
                </button> {/* Redirecciona a '/quices' */}
            </div>
            <div className='derecha'>
                <div className='navegacion'>
                    <Link to='/moduloArquitectura'>
                        <img src="/images/navegarDer.png" alt="flecha" className="flecha_navegationDer" />
                    </Link>
                </div>
                <div className='titulo-modulo'>
                <div className="sketchfab-embed-wrapper">
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
                src="https://sketchfab.com/3d-models/tutankhamun-golden-mask-4d5723e76ef446daabc293ce8fc332b8/embed"
              ></iframe>
            </div>
                
                </div>
            </div>
        </div>
    );
}
