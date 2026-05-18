import { useState } from "react";
import DogCard from "../components/DogCard";
import Modal from "../components/Modal";

function Favorites({ favoritos, setFavoritos }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">⭐ Favoritos</h2>
        <p className="text-muted mb-0">
          Tus perros guardados se muestran aquí.
        </p>
      </div>

      {favoritos.length === 0 ? (
        <div className="alert alert-secondary text-center">
          No hay favoritos
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favoritos.map((img, i) => (
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
      )}

      <Modal img={selectedImg} onClose={() => setSelectedImg(null)} />
    </div>
  );
}

export default Favorites;