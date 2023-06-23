
import "./estiloModuloArte.css";
import { Link } from "react-router-dom";

export function ModuloArte() {


  return (
    <div className="Contenedor">
      <div className="izquierda1">
        <div className="titulo-modulo">ARTE</div>
        <div className="contenido-modulo">
          El arte del antiguo Egipto es una expresión fascinante de la cultura y las creencias de esta antigua civilización. Los egipcios dejaron un legado artístico que abarcó miles de años. Sus obras de arte se caracterizan por la rigidez y la frontalidad, donde las figuras humanas y divinas se representaban de manera idealizada y simbólica. El arte egipcio se encuentra en murales, esculturas y relieves que adornaban los templos y las tumbas. Los jeroglíficos, escritura pictórica, también se consideran una forma de arte. Los colores vivos y llamativos, como el azul, el rojo y el oro, eran prominentes en las pinturas y esculturas egipcias. A través de su arte, los egipcios buscaban transmitir poder, religión y la creencia en la vida después de la muerte.
        </div>
      </div>
      <div className="derecha">
        {/* Navegación hacia el módulo de Costumbres */}
        <div className="navegacion">
          <Link to="/arte1">
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
            src="https://sketchfab.com/3d-models/broken-obelisk-egypt-d809753e909747cc8e7cc6ae2e40f57e/embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
