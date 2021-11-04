import { useState } from "react";
import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";
import Searcher from "../Searcher/Searcher";
import currentCityContext from "../../contexts/currentCityContext";


export default function Home() {
  const [categoriaActual, setCategoriaActual] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  return (
    <currentCityContext.Provider value={{ currentCity, setCurrentCity }}>
      <Searcher />
      <BloqueCategorias setCategoriaActual={setCategoriaActual} />
      <BloqueAlojamientos categoriaActual={categoriaActual} />
    </currentCityContext.Provider>
  );
}
