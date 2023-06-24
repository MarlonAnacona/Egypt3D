
import './estiloModuloCostumbres.css';
import { Link } from 'react-router-dom';

export function Costumbres3() {


    return (
        <div className="Contenedor">
            <div className="izquierda">
                {/* Navegación hacia el módulo de Arte */}
                <div className="navegacion">
                    <Link to="/costumbres2">
                        <img
                            src="/images/navegarIzq.png"
                            alt="flecha"
                            className="flecha_navegationIzq"
                        />
                    </Link>
                </div>
                <div className="contenido-modulo">
                    El Festival de Opet era la principal festividad religiosa del antiguo Egipto y se celebraba anualmente. Durante este festival, se llevaban a cabo procesiones ceremoniales en honor a los dioses Amón, Mut y Jonsu. Era un momento de celebración y renovación religiosa en el que se realizaban ofrendas y se llevaban estatuas de los dioses en barcas sagradas.                    
                    <br />
                    <br />
                    Una de las principales creencias religiosas del antiguo Egipto era el politeísmo. Los egipcios adoraban a una amplia variedad de dioses y diosas, cada uno con su propio dominio y culto asociado. Los dioses egipcios representaban diferentes aspectos de la vida y el mundo natural, y eran reverenciados y adorados en templos y en la vida diaria.                    <br />
                    <br />
                    Los antiguos egipcios utilizaban un sistema de numeración propio, conocido como el sistema de numeración egipcio. Este sistema estaba basado en el uso de jeroglíficos para representar los números y tenía un enfoque decimal. Los jeroglíficos se combinaban para formar diferentes valores numéricos.

                </div>
            </div>
            <div className="derecha">
                <div className="navegacion">
                    <Link to="/costumbres4">
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
                        src="https://sketchfab.com/3d-models/part-2-abu-simbel-temples-aswan-egypt-69d798f01d124734a76bb8f22f6d0d5e/embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
