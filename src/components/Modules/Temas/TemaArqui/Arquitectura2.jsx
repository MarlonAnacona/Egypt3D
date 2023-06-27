import './Arquitectura.css';
import { Link } from 'react-router-dom';

export function Arquitectura2() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                <div className='navegacion'>
                    <Link to='/arquitectura1'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <h2>ARQUITECTURA - ESFINGE</h2>
                <div className="contenido-modulo">
                    La piedra caliza fue el material de construcción característico utilizado en la arquitectura egipcia. Su durabilidad y abundancia en la región permitieron la creación de monumentos duraderos y magníficos. Los antiguos egipcios también emplearon otros materiales como ladrillos de barro y adobe en estructuras menos monumentales.
                    <br />
                    <br />
                    La esfinge es uno de los elementos arquitectónicos más icónicos de Egipto. Esta misteriosa estructura tiene forma de un animal con cuerpo de león y cabeza humana, y la más famosa es la Gran Esfinge de Giza. La esfinge se consideraba un guardián del complejo funerario y tenía una gran importancia religiosa y simbólica.
                    <br />
                    <br />
                    Los templos egipcios eran lugares sagrados destinados al culto y adoración de los dioses. Estas impresionantes estructuras eran centros religiosos donde los sacerdotes realizaban rituales y ofrendas en honor a las deidades egipcias. También se creía que los templos eran moradas divinas y puntos de encuentro entre los dioses y los humanos.
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia mas informacion del modulo */}
                <div className="navegacion">
                    <Link to="/arquitectura3">
                        <img
                            src="/images/navegarDer.png"
                            alt="flecha"
                            className="flecha_navegationDer"
                        />
                    </Link>
                </div>
                <div className="titulo-modulo">
                    {/* Iframe con el modelo 3D de Sketchfab */}
                    <div className="sketchfab-embed-wrapper">
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
                            src="https://sketchfab.com/3d-models/egypt-sphinx-d7a2a6dec027400aae6b5427cea3421e/embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
