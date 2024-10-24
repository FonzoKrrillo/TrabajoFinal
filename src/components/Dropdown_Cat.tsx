function Dropdown_Cat() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <a href="/Catalogue">Catálogo</a>
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a className="drpdwn_i" href="#purificadoras">
          Purificadoras
        </a>
        <a className="drpdwn_i" href="#decorativas">
          Decorativas
        </a>
        <a className="drpdwn_i" href="#faciles">
          Faciles de cuidar
        </a>
      </div>
    </div>
  );
}

export default Dropdown_Cat;
