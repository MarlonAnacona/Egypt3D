import '../videos.css'; // Importar estilos para el componente de video
import { Link } from 'react-router-dom'; // Importar el componente Link de react-router-dom

export function VideoArte() {
  return (
    <div className="contenedor-video">
      {/* Navegación */}
      <div className='navegacion'>
        {/* Enlace a la página anterior */}
        <Link to='/arquitectura4'>
          <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
        </Link>
      </div>
      
      {/* Componente de video */}
      <iframe
        style={{
          width: '70%',
          height: '80%',
          borderRadius: '10px',
          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.8)',
        }}
        title="Video"
        frameBorder="0"
        allowFullScreen={true}
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://www.youtube.com/embed/5dfXt2nO8Nc"
      ></iframe>
    </div>
  );
}
