import { useState } from "react";
import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";
import Searcher from "../Searcher/Searcher";
import currentCityContext from "../../contexts/currentFilterContext";


export default function Home() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentDateRange, setCurrentDateRange] = useState({fechaInicio: null, fechaFin: null});
  const [reset, setReset] = useState(false);

  return (
    <currentCityContext.Provider value={{ currentCity, setCurrentCity, currentCategory, setCurrentCategory, currentDateRange, setCurrentDateRange }}>
      <Searcher setReset={setReset} reset={reset} />
      <BloqueCategorias  />
      <BloqueAlojamientos  setReset={setReset}/>
    </currentCityContext.Provider>
  );
}
