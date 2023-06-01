import { useNavigate } from "react-router-dom";
import "./estiloModulos.css";
import { Link } from "react-router-dom";

export function ModuloArte() {
  const navigate = useNavigate();

  const handleQuicesClick = () => {
    navigate("/quices"); // Redirige a la ruta '/quices'
  };

  return (
    <div className="Contenedor">
      <div className="izquierda">
        <div className="navegacion">
          <Link to="/moduloMitologia">
            <img
              src="/images/navegarIzq.png"
              alt="flecha"
              className="flecha_navegationIzq"
            />
          </Link>
        </div>
        <div className="titulo-modulo">ARTE</div>
        <div className="contenido-modulo">
          El arte del antiguo Egipto es una expresión fascinante de la cultura y
          las creencias de esta antigua civilización. Los egipcios dejaron un
          legado artístico que abarcó miles de años. Sus obras de arte se
          caracterizan por la rigidez y la frontalidad, donde las figuras
          humanas y divinas se representaban de manera idealizada y simbólica.
          El arte egipcio se encuentra en murales, esculturas y relieves que
          adornaban los templos y las tumbas. Los jeroglíficos, escritura
          pictórica, también se consideran una forma de arte. Los colores vivos
          y llamativos, como el azul, el rojo y el oro, eran prominentes en las
          pinturas y esculturas egipcias. A través de su arte, los egipcios
          buscaban transmitir poder, religión y la creencia en la vida después
          de la muerte.
        </div>
        <button className="buttonQuiz" onClick={handleQuicesClick}>
          <img src="/images/auditoria.png" alt="" />
          QUIZ
        </button>{" "}
        {/* Redirecciona a '/quices' */}
      </div>
      <div className="derecha">
        <div className="navegacion">
          <Link to="/moduloCostumbres">
            <img
              src="/images/navegarDer.png"
              alt="flecha"
              className="flecha_navegationDer"
            />
          </Link>
        </div>
        <div className="titulo-modulo">Aqui va el modelo 3d uwu</div>
      </div>
    </div>
  );
}
