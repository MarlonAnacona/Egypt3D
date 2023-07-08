import { useState } from "react";
import "./News.css";

export function News() {
  // Estado para almacenar la tarjeta activa
  const [activeCard, setActiveCard] = useState(null);

  // Manejar el clic en una tarjeta
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="contenedor-cartas-news">
        {/* Tarjeta de Noticias 1 */}
        <div
          className={`carta ${activeCard === "Noticias1" ? "active" : ""}`}
          onMouseEnter={() => setActiveCard("Noticias1")}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => handleClick("https://www.eldebate.com/historia/20230706/asi-operaban-cataratas-antiguo-egipto_126142.html")}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Noticias1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>Un arte milenario: así operaban de cataratas en el Antiguo Egipto</h3>
          <div className="cubridor">
            <div className="texto-news">
              <p>
                Desde la época de los faraones, muchos egipcios sufren la «Oftalmia del desierto» o Tracoma, una enfermedad ocular provocada por la bacteria parasita 'Chlamydia trachomatis'
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Noticias 2 */}
        <div
          className={`carta ${activeCard === "Noticias2" ? "active" : ""}`}
          onMouseEnter={() => setActiveCard("Noticias2")}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => handleClick("https://www.20minutos.es/cinemania/noticias/netflix-desconocido-piramide-perdida-busca-egipcia-5144998/")}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Noticias2.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>Netflix busca una pirámide secreta en este asombroso documental sobre el Antiguo Egipto</h3>
          <div className="cubridor">
            <div className="texto-news">
              <p>
                La carrera a contrarreloj de unos egiptólogos por desvelar los secretos del Antiguo Egipto sobre una mítica pirámide ha cautivado a la audiencia desde que, a principios de mes, se estrenase en Netflix esta historia basada en hechos reales.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Noticias 3 */}
        <div
          className={`carta ${activeCard === "Noticias3" ? "active" : ""}`}
          onMouseEnter={() => setActiveCard("Noticias3")}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => handleClick("https://www.nationalgeographicla.com/historia/2023/05/3-mitos-del-antiguo-egipto-que-te-sorprenderan")}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Noticias3.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>3 mitos del antiguo Egipto que te sorprenderán</h3>
          <div className="cubridor">
            <div className="texto-news">
              <p>
                Los antiguos egipcios creían que el universo surgió de un inmenso océano y que los humanos fueron creados a partir de las lágrimas del dios Sol. Descubre más sobre las creencias de esta increíble civilización.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Noticias 4 */}
        <div
          className={`carta ${activeCard === "Noticias4" ? "active" : ""}`}
          onMouseEnter={() => setActiveCard("Noticias4")}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => handleClick("https://historia.nationalgeographic.com.es/a/rostros-fayum-miradas-eternas-antiguo-egipto_19789")}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Noticias4.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>Rostros de el fayum, miradas eternas del antiguo egipto</h3>
          <div className="cubridor">
            <div className="texto-news">
              <p>
                Los retratos de época grecorromana que cubrían las momias descubiertas en la necrópolis egipcia de El Fayum son uno de los mayores tesoros pictóricos de la antigüedad tanto por su belleza como por su realismo.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Noticias 5 */}
        <div
          className={`carta ${activeCard === "Noticias5" ? "active" : ""}`}
          onMouseEnter={() => setActiveCard("Noticias5")}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => handleClick("https://www.mundodeportivo.com/uncomo/educacion/articulo/cuales-son-los-principales-dioses-egipcios-43558.html")}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Noticias5.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>Cuáles son los principales dioses egipcios</h3>
          <div className="cubridor">
            <div className="texto-news">
              <p>
                La mitología egipcia es una de las más completas que podemos encontrar, por eso los dioses de Egipto ocupaban un papel central en la vida de esta antigua civilización
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
