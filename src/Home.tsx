import IconImage from "./components/imgs/icon.png";
import plantgif from "./components/imgs/animated_plant.webp";
function Home() {
  return (
    <>
      <div className="separation"> </div>
      <div className="Homediv">
        <a href="/" className="mainsite-title">
          <img src={IconImage} alt="logo" className="logonav" />
          Paradise Nursery
        </a>
        <img src={plantgif} className="gifimg" />
        <p className="maintext">
          Bienvenido a Paradise Nursery, tu destino ideal para encontrar la
          planta perfecta que transformará tu hogar en un oasis de naturaleza y
          bienestar. En nuestra tienda online, ofrecemos una cuidadosa selección
          de plantas de interior y exterior que no solo embellecen tus espacios,
          sino que también contribuyen a mejorar la calidad del aire y tu estado
          de ánimo. Desde las resistentes suculentas y los elegantes lirios de
          paz hasta las vibrantes palmas Areca, cada una de nuestras plantas ha
          sido seleccionada con amor y dedicación, garantizando que encuentres
          opciones adecuadas para cada rincón de tu hogar. Además, en Paradise
          Nursery nos comprometemos a ofrecerte una experiencia de compra
          sencilla y agradable, con envíos rápidos y atención personalizada para
          ayudarte a elegir las plantas que mejor se adapten a tus necesidades.
          Descubre la alegría de incorporar la naturaleza en tu vida diaria y
          dale un toque especial a tu hogar con nuestras hermosas plantas.
          ¡Explora nuestro catálogo y empieza tu viaje hacia un entorno más
          verde y saludable hoy mismo!
        </p>
        <a href="/Catalogue" className="mainbtn">
          Ir a tienda
        </a>
      </div>
    </>
  );
}

export default Home;
