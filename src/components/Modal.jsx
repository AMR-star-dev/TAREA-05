function Modal({ img, onClose }) {
  if (!img) return null;

  const raza = img.split("/")[4]?.replace("-", " ") || "desconocida";

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: "95vw" }}>
        <div className="modal-content border-0 shadow-lg overflow-hidden">
          <div className="modal-body p-0 d-flex flex-column flex-md-row align-items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: "60vh", maxHeight: "80vh", overflow: "hidden" }}>
              <img
                src={img}
                className="img-fluid"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
                alt="Perro"
              />
            </div>
            <div className="p-4 text-center text-md-start w-100">
              <h2 className="fw-bold text-capitalize mb-2">Raza: {raza}</h2>
              <p className="text-muted mb-4">
                Si te gusta este perrito, pulsa ❤️ Guardar para añadirlo a favoritos.
                Para cerrar, haz clic fuera del modal o en el botón Cerrar.
              </p>
              <button
                onClick={onClose}
                className="btn btn-primary px-4"
                type="button"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;