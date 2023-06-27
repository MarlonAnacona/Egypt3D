import "./Arte.css";
import { Link } from "react-router-dom";

export function Arte2() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Mitología */}
                <div className="navegacion">
                    <Link to="/arte1">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>ARTE - REPRESENTACIONES</h2>
                <div className="contenido-modulo">
                Thot, la deidad egipcia asociada con el conocimiento y la escritura, era representada con cuerpo humano y cabeza de ibis. Esta representación simbolizaba su papel como el dios de la sabiduría y la escritura.
                <br />
                <br />
                Los relieves en los templos y tumbas del antiguo Egipto tenían como temática principal la mitología y los rituales religiosos. Estas representaciones visuales eran utilizadas para contar historias sagradas, mostrar prácticas religiosas y comunicar la conexión entre los dioses y los faraones.                <br />
                <br />
                La joyería en el antiguo Egipto tenía un propósito principal de indicar el estatus social. Las personas de alto rango usaban joyas elaboradas hechas de metales preciosos y piedras preciosas como símbolo de su posición privilegiada en la sociedad.

                
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Costumbres */}
                <div className="navegacion">
                    <Link to="/arte3">
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
                        src="https://sketchfab.com/3d-models/egypt-mask-cleopatra-3b0d7436bf304e35b2ac389611d3276c/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
