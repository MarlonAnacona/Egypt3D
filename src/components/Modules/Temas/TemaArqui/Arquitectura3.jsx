import './Arquitectura.css';
import { Link } from 'react-router-dom';

export function Arquitectura3() {

    return (
        <div className="Contenedor">
            <div className="izquierda">
                <div className='navegacion'>
                    <Link to='/arquitectura2'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
                <div className="contenido-modulo">
                    El Templo de Karnak es uno de los templos más destacados de Egipto. Este vasto complejo arquitectónico, dedicado al dios Amón, se encuentra en Luxor y cuenta con numerosos pilonos, salas hipóstilas y columnas impresionantes. El Templo de Abu Simbel, tallado en la roca de una montaña, es otro ejemplo destacado de la arquitectura egipcia.
                    <br />
                    <br />
                    En la arquitectura egipcia, se utilizaron diferentes tipos de columnas. Las columnas palmiformes se caracterizaban por tener capiteles con forma de hojas de palmera, mientras que las columnas lotiformes presentaban capiteles con forma de flor de loto. Estos elementos arquitectónicos aportaban belleza y simbolismo a los templos y otros edificios.                    <br />
                </div>
            </div>
            <div className="derecha">
                {/* Navegación hacia mas informacion del modulo */}
                <div className="navegacion">
                    <Link to="/arquitectura4">
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
                            src="https://sketchfab.com/3d-models/the-white-chapel-of-pharaoh-senusret-i-eca243532f714649a3166cd6ec000705/embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
