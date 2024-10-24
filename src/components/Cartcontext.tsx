import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CartItem {
  nombre: string;
  precio: string;
  cantidad: number;
  img: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementQuantity: (nombre: string) => void;
  decrementQuantity: (nombre: string) => void;
  removeFromCart: (nombre: string) => void;
  cartCount: number;
  totalPrice: number;
  resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.nombre === newItem.nombre
      );
      if (itemExists) {
        return prevItems.map((item) =>
          item.nombre === newItem.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, cantidad: 1 }];
      }
    });
  };

  const incrementQuantity = (nombre: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementQuantity = (nombre: string) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.nombre === nombre
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const removeFromCart = (nombre: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.nombre !== nombre)
    );
  };

  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const cartCount = cartItems.reduce((total, item) => total + item.cantidad, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.cantidad * parseFloat(item.precio),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        cartCount,
        totalPrice,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
