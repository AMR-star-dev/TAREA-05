import { useEffect, useState, useCallback } from "react";
import DogCard from "../components/DogCard";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

function Home({ favoritos, setFavoritos }) {
  const [imagenes, setImagenes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const obtenerImagenes = async (url, append = false) => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      const nuevas = Array.isArray(data.message) ? data.message : [data.message];
      const imagenesNuevas = nuevas.slice(0, 9);

      if (append) {
        setImagenes((prev) => [...prev, ...imagenesNuevas]);
      } else {
        setImagenes(imagenesNuevas);
      }
    } catch (error) {
      console.error(error);
      alert("Error al cargar imágenes");
    }

    setLoading(false);
  };

  const cargarPerrosInicial = useCallback(() => {
    obtenerImagenes("https://dog.ceo/api/breeds/image/random/9");
  }, []);

  const cargarMasPerros = () => {
    obtenerImagenes("https://dog.ceo/api/breeds/image/random/9", true);
  };

  const buscarRaza = async () => {
    if (!busqueda.trim()) return;

    obtenerImagenes(
      `https://dog.ceo/api/breed/${busqueda.toLowerCase()}/images/random/9`
    );
  };

  useEffect(() => {
    const cargarInicial = async () => {
      await cargarPerrosInicial();
    };

    cargarInicial();
  }, [cargarPerrosInicial]);

  return (
    <div className="container py-5">
      <div className="card border-0 shadow-lg rounded-4 hero-section mb-5">
        <div className="card-body p-5 text-center text-white">
          <h1 className="display-5 fw-bold mb-3">Galería de Perros</h1>
          <p className="lead mb-4 opacity-85">
            Descubre razas, guarda tus favoritas y haz click en una imagen para ver más detalles.
          </p>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="input-group shadow-sm rounded overflow-hidden mb-3">
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && buscarRaza()}
                  className="form-control border-0 py-3"
                  placeholder="Buscar raza (ej: husky)"
                />
                <button
                  onClick={buscarRaza}
                  className="btn btn-dark px-4"
                  type="button"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <Loader />}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {imagenes.map((img, i) => (
          <div key={i} className="col">
            <DogCard
              img={img}
              favoritos={favoritos}
              setFavoritos={setFavoritos}
              onClick={setSelectedImg}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          onClick={cargarMasPerros}
          className="btn btn-lg px-5 text-white shadow-sm"
          style={{
            background: "linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)",
            border: "none",
          }}
          type="button"
        >
          Cargar más imágenes
        </button>
      </div>

      <Modal img={selectedImg} onClose={() => setSelectedImg(null)} />
    </div>
  );
}

export default Home;
