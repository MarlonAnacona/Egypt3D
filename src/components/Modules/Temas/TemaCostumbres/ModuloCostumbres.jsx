
import './estiloModuloCostumbres.css';
import { Link } from 'react-router-dom';

export function ModuloCostumbres() {
  

  return (
    <div className="Contenedor">
      <div className="izquierda1">
        {/* Navegación hacia el módulo de Arte */}
        <div className="titulo-modulo">COSTUMBRES</div>
        <div className="contenido-modulo">
          Las costumbres del antiguo Egipto reflejaban la vida cotidiana y las
          creencias arraigadas en esta antigua civilización. Los egipcios tenían
          una sociedad jerárquica y organizada, donde el faraón era considerado
          un dios en la Tierra y gobernaba con poder absoluto. La religión
          desempeñaba un papel central en la vida de los egipcios, y se
          practicaban rituales y ceremonias para honrar a los dioses y asegurar
          la prosperidad y la vida después de la muerte. La vida familiar era
          valorada, y el matrimonio y la crianza de los hijos eran considerados
          importantes. La agricultura era la base de la economía, y los egipcios
          desarrollaron sistemas de irrigación para aprovechar el Nilo y cultivar
          sus tierras fértiles. Además, el comercio y la artesanía florecieron,
          y se produjeron objetos como joyas, cerámica y textiles de alta calidad.
        </div>
        
      </div>
      <div className="derecha">
      <div className="navegacion">
                    <Link to="/costumbres1">
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
            src="https://sketchfab.com/3d-models/coffins-of-pa-di-mut-mut-iy-y-and-ankh-khonsu-012ae83b8d9045468b30584883149035/embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
