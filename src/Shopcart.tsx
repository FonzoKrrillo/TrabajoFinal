import { useCart } from "./components/Cartcontext";
import Navbar from "./components/Navbar";
import Plant_carros from "./components/Plant_carros";

function Shopcart() {
  const { cartItems, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className="Carrotitle">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="carrovacio">Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <Plant_carros
              key={index}
              nombre={item.nombre}
              img={item.img}
              precio={item.precio}
              cantidad={item.cantidad}
            />
          ))}
          <h2 className="A_pagar">Total a pagar: {formatPrice(totalPrice)}</h2>
        </div>
      )}
      <div className="pagdiv">
        <button className="pagarbtn" disabled>
          Pagar
        </button>
        <p>¡Proximamente!</p>{" "}
      </div>
    </div>
  );
}

export default Shopcart;
