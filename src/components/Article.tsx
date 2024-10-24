import Button from "./Button";

interface plant_specs {
  nombre: string;
  img: string;
  desc: string;
  precio: string;
}

function Article(props: plant_specs) {
  return (
    <div className="article">
      <h2>{props.nombre}</h2>
      <img src={props.img} className="producto" />
      <p>{props.desc}</p>
      <p className="precio">
        <b>Precio:</b> ${props.precio} c/u
      </p>
      <Button nombre={props.nombre} precio={props.precio} img={props.img} />
    </div>
  );
}

export default Article;
