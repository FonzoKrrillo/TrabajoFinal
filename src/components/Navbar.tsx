import IconImage from "./imgs/icon.png";
import ShopcartIco from "./imgs/carrito.png";
import Dropdown_Cat from "./Dropdown_Cat";
import { useCart } from "./Cartcontext";

const Navbar = () => {
  const { cartCount, resetCart } = useCart();

  const handleLogoClick = () => {
    resetCart();
  };

  return (
    <nav className="nav">
      <a href="/" className="site-title" onClick={handleLogoClick}>
        <img src={IconImage} alt="logo" className="logonav" />
        Paradise Nursery
      </a>
      <ul>
        <li>
          <Dropdown_Cat />
        </li>
        <li>
          <a href="/Shopcart">
            <img
              src={ShopcartIco}
              alt="Carro de compras"
              className="IcoCarrito"
            />
            <label>{cartCount}</label>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
