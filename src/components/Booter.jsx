function Booter() {
  return (
    <footer className="mt-auto">
      <div
        className="text-white shadow-lg"
        style={{ background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 55%, #20c997 100%)" }}
      >
        <div className="container py-4">
          <div className="row align-items-center gy-3">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-1 fw-bold fs-5">Dog Gallery</p>
              <p className="mb-0 fs-6 opacity-85">
                La galería canina premium con búsqueda de razas, favoritos y detalles interactivos.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a
                href="https://dog.ceo/dog-api/"
                className="text-white text-decoration-none fw-semibold me-3 fs-6"
              >
                API Dog CEO
              </a>
              <span className="badge bg-white text-primary rounded-pill fs-6">
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Booter;
