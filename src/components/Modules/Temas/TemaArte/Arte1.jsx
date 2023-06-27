import "./Arte.css";
import { Link } from "react-router-dom";

export function Arte1() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Mitología */}
                <div className="navegacion">
                    <Link to="/moduloArte">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <h2>ARTE - SIMBOLOS</h2>
                <div className="contenido-modulo">
                El arte del antiguo Egipto se caracterizaba por su enfoque monumental y su rica simbología. En la escultura, el material de construcción principal utilizado era la piedra caliza. Los antiguos egipcios esculpían figuras en piedra para representar a los faraones, dioses y otros personajes importantes de la sociedad.
                <br />
                <br />
                En las representaciones artísticas, los faraones eran reconocidos por el tocado característico llamado "nemes". Este tocado tenía forma de pañuelo ajustado y estaba decorado con una cobra llamada "uraeus" en la frente, que simbolizaba la realeza y la protección divina.
                <br />
                <br />
                La técnica comúnmente utilizada en la pintura mural del antiguo Egipto era el fresco. Los artistas aplicaban pigmentos minerales mezclados con agua sobre una capa de yeso fresco, lo que permitía que los colores se absorbieran en el muro y se volvieran duraderos.

                
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia el módulo de Costumbres */}
                <div className="navegacion">
                    <Link to="/arte2">
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
                        src="https://sketchfab.com/3d-models/egyptian-fish-scene-483847c0d36246f0b81010eaa7e56e63/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
