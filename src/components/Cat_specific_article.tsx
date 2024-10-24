import Button from "./Button";

interface plant_specs {
  nombre: string;
  img: string;
  desc: string;
  precio: string;
}

function Cat_specific_article(props: plant_specs) {
  return (
    <div className="spec_div">
      <h2 className="spec_title">{props.nombre}</h2>
      <div className="article_spec">
        <img src={props.img} className="producto" />
        <p>{props.desc}</p>
        <p className="precio">
          <b>Precio:</b> ${props.precio} c/u
        </p>
        <Button nombre={props.nombre} precio={props.precio} img={props.img} />
      </div>
    </div>
  );
}

export default Cat_specific_article;
