function Navbar({ vistaActual, setVista }) {
  return (
    <nav
      className="navbar shadow-sm sticky-top w-100"
      style={{ backgroundColor: "#141414" }}
    >
      {/* ESTE container mantiene el orden interno */}
      <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">

        {/* Logo */}
        <span className="navbar-brand fw-bold text-white m-0">
          🐶 Dog Gallery
        </span>

        {/* Botones */}
        <div className="d-flex bg-dark rounded-pill p-1">

          <button
            onClick={() => setVista("home")}
            className={`btn btn-sm px-3 rounded-pill ${
              vistaActual === "home"
                ? "btn-light text-dark"
                : "btn-outline-light"
            }`}
          >
            Inicio
          </button>

          <button
            onClick={() => setVista("fav")}
            className={`btn btn-sm px-3 rounded-pill ${
              vistaActual === "fav"
                ? "btn-light text-dark"
                : "btn-outline-light"
            }`}
          >
            Favoritos
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;