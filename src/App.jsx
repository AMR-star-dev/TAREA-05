import { useState } from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Booter from "./components/Booter";

function App() {
  const [vista, setVista] = useState("home");
  const [homeKey, setHomeKey] = useState(0);

  // ESTADO GLOBAL DE FAVORITOS
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const handleSetVista = (value) => {
    setVista(value);
    if (value === "home") {
      setHomeKey((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="app-background min-vh-100 d-flex flex-column">
      <div className="container py-5 flex-grow-1">
        <Navbar vistaActual={vista} setVista={handleSetVista} />

        <div className={vista === "home" ? "" : "d-none"}>
          <Home key={homeKey} favoritos={favoritos} setFavoritos={setFavoritos} />
        </div>

        <div className={vista === "fav" ? "" : "d-none"}>
          <Favorites favoritos={favoritos} setFavoritos={setFavoritos} />
        </div>
      </div>

      <Booter />
    </div>
  );
}

export default App;