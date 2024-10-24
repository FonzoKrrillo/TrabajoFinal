import Home from "./Home";
import Catalogue from "./Catalogue";
import Shopcart from "./Shopcart";
import { CartProvider } from "./components/Cartcontext";

function App() {
  let pagina;
  switch (window.location.pathname) {
    case "/":
      pagina = <Home />;
      break;
    case "/Catalogue":
      pagina = <Catalogue />;
      break;
    case "/Shopcart":
      pagina = <Shopcart />;
      break;
    default:
      pagina = <Home />;
  }

  return <CartProvider> {pagina}</CartProvider>;
}

export default App;
