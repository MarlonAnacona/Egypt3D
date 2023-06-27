import "./Arte.css";
import { Link } from "react-router-dom";

export function Arte3() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Mitología */}
                <div className="navegacion">
                    <Link to="/arte2">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>ARTE - JOYAS</h2>
                <div className="contenido-modulo">
                La tumba de Tutankamón es considerada el ejemplo más famoso de la arquitectura funeraria del antiguo Egipto. Descubierta en el Valle de los Reyes en 1922, esta tumba estaba llena de tesoros y artefactos que proporcionaron valiosa información sobre la vida y la muerte de un faraón.
                <br />
                <br />
                Los amuletos en el antiguo Egipto tenían un propósito principal de brindar protección mágica. Estos objetos, hechos de diversos materiales como piedra, metal o cerámica, se usaban para alejar el mal y atraer la buena fortuna.                <br />
                <br />
                El símbolo utilizado para representar la vida eterna en el arte egipcio era el "ankh". Este símbolo, que se asemeja a una cruz con un bucle en la parte superior, era considerado el símbolo de la vida y se asociaba con la inmortalidad.

                
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Costumbres */}
                <div className="navegacion">
                    <Link to="/arte4">
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
                        src="https://sketchfab.com/3d-models/the-ankh-074a2fb1fd854b5a8628216c4eac2aa6/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
