import Article from "./Article";
import aloe_v from "./imgs/aloe_v.jpg";
import calathea from "./imgs/calathea.jpg";
import croton from "./imgs/croton.jpg";
import ficus_l from "./imgs/ficus_l.jpg";
import lengua_d_s from "./imgs/lengua_d_s.jpg";
import lirio_d_l_p from "./imgs/lirio_d_l_p.jpg";
import palma_a from "./imgs/palma_a.jpg";
import poto from "./imgs/poto.jpg";
import suculenta from "./imgs/suculenta.jpeg";

function General_Catalogue() {
  const plantas = {
    purificadoras: [
      [
        "Lengua de suegra",
        "Es una planta extremadamente resistente y fácil de cuidar. Tiene hojas verticales que pueden absorber toxinas y mejorar la calidad del aire. Ideal para cualquier rincón del hogar y puede sobrevivir con poca luz y agua.",
        "20000",
        lengua_d_s,
      ],
      [
        "Palma Areca",
        "Esta elegante palma tiene hojas largas y arqueadas que no solo embellecen el hogar, sino que también actúan como purificadoras, eliminando contaminantes comunes del aire. Necesita buena luz y riego moderado.",
        "50000",
        palma_a,
      ],
      [
        "Lirio de la paz",
        "Con hojas verdes brillantes y delicadas flores blancas, esta planta no solo es atractiva, sino que también purifica el aire al eliminar sustancias químicas como el benceno y el formaldehído. Fácil de cuidar, requiere luz indirecta.",
        "25000",
        lirio_d_l_p,
      ],
    ],
    decorativas: [
      [
        "Calathea",
        "Famosa por sus hojas de patrones llamativos, la Calathea es perfecta para añadir un toque exótico al hogar. Se desarrolla mejor en ambientes con luz indirecta y alta humedad.",
        "40000",
        calathea,
      ],
      [
        "Ficus lyrata",
        "Sus grandes hojas en forma de violín la convierten en una planta decorativa muy popular. El Ficus lirata puede crecer bastante alto y se adapta bien a espacios con luz brillante indirecta.",
        "60000",
        ficus_l,
      ],
      [
        "Crotón",
        "Con sus hojas brillantes de colores rojo, naranja y amarillo, el Crotón añade una explosión de color a cualquier espacio. Necesita buena iluminación y algo de riego regular.",
        "30000",
        croton,
      ],
    ],
    faciles: [
      [
        "Suculenta",
        "Esta pequeña planta tiene hojas carnosas que almacenan agua, lo que la convierte en una excelente opción para personas ocupadas o con poca experiencia en jardinería. Se adapta bien a luz brillante y necesita riego mínimo.",
        "10000",
        suculenta,
      ],
      [
        "Poto",
        "Con hojas en forma de corazón y un crecimiento rápido, el Poto es una de las plantas más fáciles de cuidar. Crece bien en casi cualquier condición de luz y puede sobrevivir con riego ocasional.",
        "15000",
        poto,
      ],
      [
        "Aloe vera",
        "Además de ser una planta muy resistente, el Aloe vera es conocido por sus propiedades medicinales. Necesita muy poco riego y prefiere la luz directa o brillante.",
        "20000",
        aloe_v,
      ],
    ],
  };

  return (
    <>
      {Object.entries(plantas).map(([categoria, plantas]) => (
        <div key={categoria}>
          <h2 className="Cat_title">
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </h2>
          <div className="article_row">
            {plantas.map((planta, index) => (
              <Article
                key={index}
                nombre={planta[0]}
                desc={planta[1]}
                precio={planta[2]}
                img={planta[3]}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default General_Catalogue;
