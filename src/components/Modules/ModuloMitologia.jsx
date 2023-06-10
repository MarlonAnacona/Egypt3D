import { useNavigate } from 'react-router-dom';
import './estiloModulos.css';
import { Link } from 'react-router-dom';

export function ModuloMitologia() {
  const navigate = useNavigate();

  // Manejar el clic en el botón de Quices
  const handleQuicesClick = () => {
    navigate('/quices'); // Redirige a la ruta '/quices'
  };

  return (
    <div className="Contenedor">
      <div className="izquierda">
        {/* Navegación hacia el módulo de Arquitectura */}
        <div className="navegacion">
          <Link to="/moduloArquitectura">
            <img
              src="/images/navegarIzq.png"
              alt="flecha"
              className="flecha_navegationIzq"
            />
          </Link>
        </div>
        <div className="titulo-modulo">MITOLOGIA</div>
        <div className="contenido-modulo">
          La mitología del antiguo Egipto está llena de dioses y diosas que
          desempeñaban roles importantes en la vida y la creencia egipcia. Ra,
          el dios del sol, era considerado el creador y el gobernante supremo.
          Osiris, el dios de la vida después de la muerte, era venerado como el
          juez de las almas en el más allá. Isis, su esposa y hermana, era la
          diosa de la magia y la fertilidad. Otros dioses notables incluyen a
          Horus, el dios del cielo, y Anubis, el dios de la muerte y el
          embalsamamiento. La mitología egipcia también presenta criaturas
          míticas como el ave fénix y el escarabajo sagrado. Los egipcios creían
          en la importancia de los rituales y las ofrendas para asegurar el
          favor de los dioses y garantizar una vida eterna después de la muerte.
        </div>
        <button className="buttonQuiz" onClick={handleQuicesClick}>
          <img src="/images/auditoria.png" alt="" />
          QUIZ
        </button> {/* Redirecciona a '/quices' */}
      </div>
      <div className="derecha">
        {/* Navegación hacia el módulo de Arte */}
        <div className="navegacion">
          <Link to="/moduloArte">
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
            src="https://sketchfab.com/3d-models/anubis-e98a22b58f4440538f69424ed532737f/embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
