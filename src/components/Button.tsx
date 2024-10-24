import { useState, useEffect } from "react";
import { useCart } from "./Cartcontext";

interface ButtonProps {
  nombre: string;
  precio: string;
  img: string;
}

function Button({ nombre, precio, img }: ButtonProps) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const itemExists = cartItems.find((item) => item.nombre === nombre);
    setAddedToCart(!!itemExists);
  }, [cartItems, nombre]);

  const handleClick = () => {
    if (addedToCart) {
      removeFromCart(nombre);
    } else {
      addToCart({ nombre, precio, cantidad: 1, img });
    }
  };

  return (
    <a
      className={`Add_cart ${addedToCart ? "added" : ""}`}
      onClick={handleClick}
    >
      {addedToCart ? "Eliminar del carrito" : "Añadir al carrito"}
    </a>
  );
}

export default Button;
