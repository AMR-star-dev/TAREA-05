function DogCard({ img, favoritos = [], setFavoritos, onClick }) {
  const esFav = favoritos.includes(img);
  const raza = img.split("/")[4]?.replace("-", " ") || "desconocida";

  const toggleFavorito = (e) => {
    e.stopPropagation();

    let nuevos;
    if (esFav) {
      nuevos = favoritos.filter((f) => f !== img);
    } else {
      nuevos = [...favoritos, img];
    }

    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  return (
    <div className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden">
      <div className="ratio ratio-4x3 overflow-hidden">
        <img
          src={img}
          onClick={() => onClick && onClick(img)}
          className="card-img-top img-fluid"
          alt="Imagen de perro"
        />
      </div>

      <div className="card-body text-center px-4 pt-4">
        <p className="text-uppercase text-muted mb-2 small">Raza</p>
        <h5 className="card-title text-capitalize mb-3">{raza}</h5>
        <button
          onClick={toggleFavorito}
          className={`btn btn-sm ${esFav ? "btn-danger" : "btn-primary"}`}
          type="button"
        >
          {esFav ? "💔 Quitar" : "❤️ Guardar"}
        </button>
      </div>
    </div>
  );
}

export default DogCard;