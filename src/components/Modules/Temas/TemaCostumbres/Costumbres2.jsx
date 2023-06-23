
import './estiloModuloCostumbres.css';
import { Link } from 'react-router-dom';

export function Costumbres2() {


    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/costumbres1">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <div className="contenido-modulo">
                    Una de las principales comidas en el antiguo Egipto era el pan de trigo. El pan era un alimento básico en la dieta egipcia y se elaboraba con harina de trigo. También se consumían otros alimentos como frutas, verduras, legumbres, pescado y carne en menor medida.
                    <br />
                    <br />
                    La agricultura era una de las principales actividades económicas del antiguo Egipto. Los egipcios cultivaban cultivos como trigo, cebada, lino, vegetales y frutas utilizando el sistema de riego del Nilo. La prosperidad agrícola fue fundamental para el desarrollo de la civilización egipcia.
                    <br />
                    <br />
                    La principal forma de escritura utilizada por los antiguos egipcios eran los jeroglíficos. Estos complejos caracteres pictográficos eran utilizados para escribir textos religiosos, registros históricos y textos literarios. La escritura jeroglífica era realizada por escribas entrenados y se inscribía en templos, tumbas y monumentos.

                </div>
            </div>
            <div className="derecha">
                <div className="navegacion">
                    <Link to="/costumbres3">
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
                        src="https://sketchfab.com/3d-models/wheat-field-8ad64efbd6e247bf82efb34495fa7748/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
