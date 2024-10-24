import { useCart } from "./Cartcontext";

interface PlantSpecs {
  nombre: string;
  img: string;
  precio: string;
  cantidad: number;
}

function Plant_carros(props: PlantSpecs) {
  const { incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="cart_plant">
      <h2>{props.nombre}</h2>
      <img src={props.img} className="producto_cart" alt={props.nombre} />
      <p className="precio_cart">${props.precio}</p>
      <div className="cart_cant">
        <a onClick={() => decrementQuantity(props.nombre)}>-</a>
        <p>{props.cantidad}</p>
        <a onClick={() => incrementQuantity(props.nombre)}>+</a>
      </div>
    </div>
  );
}

export default Plant_carros;
