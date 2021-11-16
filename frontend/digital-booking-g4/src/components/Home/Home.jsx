import { useState } from "react";
import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";
import Searcher from "../Searcher/Searcher";
import currentCityContext from "../../contexts/currentFilterContext";


export default function Home() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  return (
    <currentCityContext.Provider value={{ currentCity, setCurrentCity, currentCategory, setCurrentCategory }}>
      <Searcher />
      <BloqueCategorias  />
      <BloqueAlojamientos  />
    </currentCityContext.Provider>
  );
}
