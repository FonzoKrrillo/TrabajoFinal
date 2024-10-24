import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import General_Catalogue from "./components/General_Catalogue";
import Spec_Catalogue from "./components/Spec_Catalogue";

function Catalogue() {
  const [catalVer, setCatalVer] = useState(<General_Catalogue />);

  const updateCatalogueView = () => {
    switch (window.location.hash) {
      case "#purificadoras":
        setCatalVer(<Spec_Catalogue cat="Purificadoras" />);
        break;
      case "#decorativas":
        setCatalVer(<Spec_Catalogue cat="Decorativas" />);
        break;
      case "#faciles":
        setCatalVer(<Spec_Catalogue cat="Facil cuidado" />);
        break;
      default:
        setCatalVer(<General_Catalogue />);
        break;
    }
  };

  useEffect(() => {
    updateCatalogueView();
    window.addEventListener("hashchange", updateCatalogueView);
    return () => {
      window.removeEventListener("hashchange", updateCatalogueView);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="catalogue_container">{catalVer}</div>
    </>
  );
}

export default Catalogue;
